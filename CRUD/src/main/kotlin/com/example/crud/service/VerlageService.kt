package com.example.crud.service


import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.repositories.AutorenRepository
import com.example.crud.repositories.Verlage
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class VerlageService (var repository: VerlageRepository, val VerlagToAutorService: VerlagToAutorService, var autorrepository: AutorenRepository) {

    data class Add(
        val vorname: MutableList<String>,
        val nachname: MutableList<String>,
        val name: String,
        var verlagnummer: Long?
    )
    fun addVerlag(input: VerlageDTORequest, verlagnummer: Long?): Add {
        val vorname = mutableListOf<String>()
        val nachname = mutableListOf<String>()

        val save = repository.save(
            Verlage(
                verlagnummer = verlagnummer,
                name = input.name
            )
        )
        if (input.autor!= null){

            for(autor in input.autor!!) {
                VerlagToAutorService.VerlagToAutor(verlagnummer = save.verlagnummer!!, autornummer = autor!!)
            }

            for(autor in input.autor!!) {
                val autorname = autorrepository.findById(autor!!).orElse(null)
                vorname.add(autorname.vorname)
                nachname.add(autorname.nachname)
            }
        }

        return Add(vorname, nachname, save.name, save.verlagnummer!!)
    }

    fun createVerlag(input: VerlageDTORequest): VerlageDTOResponse {

        val verlag = addVerlag(input, null)

        return VerlageDTOResponse(verlagnummer = verlag.verlagnummer!!, name = verlag.name,  autorVorname = verlag.vorname, autorNachname = verlag.nachname, buecher = null)
    }

    fun getVerlag(verlagnummer: Long): Optional<VerlageDTOResponse>? {
        val verlag = repository.findById(verlagnummer).orElse(null) ?: return null
        val autorVorname = verlag.autor.map { it.vorname }
        val autorNachname = verlag.autor.map { it.nachname }

        val buecher = verlag.Verlagbuecher.map {it.buchname}
        return repository.findById(verlagnummer).map { VerlageDTOResponse(verlagnummer = verlag.verlagnummer!!, name = verlag.name, autorVorname = autorVorname, autorNachname = autorNachname, buecher = buecher)}
    }

    fun updateVerlag(verlagnummer: Long, updateVerlag: VerlageDTORequest): VerlageDTOResponse?{
        val verlag = repository.findById(verlagnummer).orElseThrow { throw java.lang.IllegalArgumentException("Da funktionuggelt was nicht")}
        val buecher = verlag.Verlagbuecher.map {it.buchname}
        return repository.findById(verlagnummer).map {
            val verlag = addVerlag(updateVerlag, verlagnummer)
            VerlageDTOResponse (name = verlag.name, verlagnummer = verlag.verlagnummer!!, autorVorname = verlag.vorname, autorNachname = verlag.nachname, buecher = buecher)
        }.orElseGet(null)

    }

    fun deleteVerlag(verlagnummer: Long) {
        val verlag = repository.findById(verlagnummer)
            .orElseThrow { throw IllegalArgumentException("Der Verlag existiert garnicht du depp") }

        verlag.autor.forEach { autor -> autor.verlage.remove(verlag) }
        verlag.autor.clear()

        verlag.Verlagbuecher.forEach { buch -> buch.verlag = null }
        verlag.Verlagbuecher.clear()

        repository.delete(verlag)
    }

}