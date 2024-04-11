package com.example.crud.service


import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.model.VerlageDTOResponse2
import com.example.crud.repositories.AutorenRepository
import com.example.crud.repositories.Verlage
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class VerlageService (var repository: VerlageRepository, val VerlagToAutorService: VerlagToAutorService, var autorrepository: AutorenRepository) {
    fun createVerlag(newVerlag: VerlageDTORequest): VerlageDTOResponse2 {
        val save = repository.save(
            Verlage(
                verlagnummer = null,
                name = newVerlag.name

            )
        )

        val vorname = mutableListOf<String>()
        val nachname = mutableListOf<String>()

        if (newVerlag.autor!= null){

            for(autor in newVerlag.autor!!) {
                VerlagToAutorService.VerlagToAutor(verlagnummer = save.verlagnummer!!, autornummer = autor!!)
            }

            for(autor in newVerlag.autor!!) {
                val autorname = autorrepository.findById(autor!!).orElse(null)
                vorname.add(autorname.vorname)
                nachname.add(autorname.nachname)
            }
        }


        return VerlageDTOResponse2(verlagnummer = save.verlagnummer!!, name = save.name,  autorVorname = vorname, autorNachname = nachname, buecher = null)
    }

    fun getVerlag(verlagnummer: Long): Optional<VerlageDTOResponse2>? {
        val verlag = repository.findById(verlagnummer).orElse(null) ?: return null
        val autorVorname = verlag.autor.map { it.vorname }
        val autorNachname = verlag.autor.map { it.nachname }

        val buecher = verlag.Verlagbuecher.map {it.buchname}
        return repository.findById(verlagnummer).map { VerlageDTOResponse2(verlagnummer = verlag.verlagnummer!!, name = verlag.name, autorVorname = autorVorname, autorNachname = autorNachname, buecher = buecher)}
    }

}