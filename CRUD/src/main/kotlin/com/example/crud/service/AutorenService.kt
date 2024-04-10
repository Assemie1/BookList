package com.example.crud.service

import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import org.springframework.stereotype.Service

@Service
class AutorenService (var repository: AutorenRepository) {
    fun createAutor(newAutor: AutorenDTORequest): AutorenDTOResponse {
        val save = repository.save(
            Autoren(
                autorennummer = null,
                vorname = newAutor.vorname,
                nachname = newAutor.nachname

            )
        )
        return AutorenDTOResponse(autorennummer = save.autorennummer!!, vorname = save.vorname, nachname = save.nachname)
    }
}