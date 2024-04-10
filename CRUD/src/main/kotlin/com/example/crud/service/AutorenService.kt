package com.example.crud.service

import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import java.util.NoSuchElementException

@Service
class AutorenService (var repository: AutorenRepository, var verlagrepository: VerlageRepository) {
    fun createAutor(newAutor: AutorenDTORequest): AutorenDTOResponse {
        val save = repository.save(
            Autoren(
                autornummer = null,
                vorname = newAutor.vorname,
                nachname = newAutor.nachname

            )
        )
        return AutorenDTOResponse(autornummer = save.autornummer!!, vorname = save.vorname, nachname = save.nachname)
    }

    fun VerlagToAutor(autornummer: Long, verlagnummer: Long) {
        val autorOptional = repository.findById(autornummer)
        val verlagOptional = verlagrepository.findById(verlagnummer)

        if (autorOptional.isPresent && verlagOptional.isPresent) {
            val autor  = autorOptional.get()
            val verlag = verlagOptional.get()
            autor.verlage.add(verlag)
            repository.save(autor)
        }else{
            throw NoSuchElementException("Autor oder Verlag existiert nicht")
        }

    }

}