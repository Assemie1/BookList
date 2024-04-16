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
    fun createBuch(newBuch: BuecherDTORequest): BuecherDTOResponse {
        val verlag = verlagRepository.findById(newBuch.verlagnummer).orElse(null)
        val autor = autorRepository.findById(newBuch.autornummer).orElse(null)

        val save = repository.save(
            Buecher(
                buchnummer = null,
                isbn = newBuch.isbn,
                buchname = newBuch.buchname,
                verlag = verlag,
                autor = autor,

            )
        )
        return BuecherDTOResponse(buchnummer = save.buchnummer!!, isbn = save.isbn, buchname = save.buchname, verlagname = save.verlag?.name, autorvorname = save.autor?.vorname, autornachname = save.autor?.nachname)
    }

    fun getBuch(buchnummer: Long): BuecherDTOResponse? {
        return repository.findById(buchnummer).map { BuecherDTOResponse(buchnummer = it.buchnummer!!, buchname = it.buchname, isbn = it.isbn, verlagname = it.verlag?.name, autorvorname = it.autor?.vorname, autornachname = it.autor?.nachname) }.getOrNull()
    }

    fun deleteBuch(buchnummer: Long) {
        val buch = repository.findById(buchnummer).orElseThrow{ throw IllegalArgumentException("Das Buch existiert garnicht du depp") }



        repository.delete(buch)

    }

}