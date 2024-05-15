package com.example.crud.service


import com.example.crud.model.BuecherDTORequest
import com.example.crud.model.BuecherDTOResponse
import com.example.crud.repositories.AutorenRepository
import com.example.crud.repositories.Buecher
import com.example.crud.repositories.BuecherRepository
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class BuecherService (var repository: BuecherRepository, var verlagRepository: VerlageRepository, var autorRepository: AutorenRepository) {


    data class Add(
        var buchnummer: Long,
        val isbn: Long,
        val buchname: String,
        val beschreibung: String?,
        val verlag: String?,
        val vorname: String?,
        val nachname: String?
    )

    fun addBuch(input: BuecherDTORequest, buchnummer: Long?): Add{
        val verlag = verlagRepository.findById(input.verlagnummer).orElse(null)
        val autor = autorRepository.findById(input.autornummer).orElse(null)

        val save = repository.save(
            Buecher(
                buchnummer = buchnummer,
                isbn = input.isbn,
                buchname = input.buchname,
                beschreibung = input.beschreibung,
                verlag = verlag,
                autor = autor,

                )
        )
        val name = save.verlag?.name
        val vorname = save.autor?.vorname
        val nachname = save.autor?.nachname

        return Add(save.buchnummer!!, save.isbn, save.buchname, save.beschreibung, name, vorname, nachname)
    }

    fun createBuch(newBuch: BuecherDTORequest): BuecherDTOResponse {

        val buch = addBuch(newBuch, null)

        return BuecherDTOResponse(buchnummer = buch.buchnummer!!, isbn = buch.isbn, buchname = buch.buchname, buch.beschreibung, verlagname = buch.verlag, autorvorname = buch.vorname, autornachname = buch.nachname, verlagnummer = newBuch.verlagnummer, autornummer = newBuch.autornummer)
    }

    fun getBuch(buchnummer: Long): BuecherDTOResponse? {
        return repository.findById(buchnummer).map { BuecherDTOResponse(buchnummer = it.buchnummer!!, buchname = it.buchname, isbn = it.isbn, beschreibung = it.beschreibung, verlagname = it.verlag?.name, autorvorname = it.autor?.vorname, autornachname = it.autor?.nachname, verlagnummer = it.verlag?.verlagnummer, autornummer = it.autor?.autornummer) }.getOrNull()
    }

    fun updateBuch(buchnummer: Long, input: BuecherDTORequest): BuecherDTOResponse?{
        return repository.findById(buchnummer).map {
            val buch = addBuch(input, buchnummer)
            BuecherDTOResponse(buchnummer = buch.buchnummer!!, isbn = buch.isbn, buchname = buch.buchname, buch.beschreibung, verlagname = buch.verlag, autorvorname = buch.vorname, autornachname = buch.nachname, verlagnummer = it.verlag?.verlagnummer, autornummer = it.autor?.autornummer)
        }.orElseGet(null)
    }

    fun deleteBuch(buchnummer: Long) {
        val buch = repository.findById(buchnummer).orElseThrow{ throw IllegalArgumentException("Das Buch existiert garnicht du depp") }



        repository.delete(buch)

    }

}