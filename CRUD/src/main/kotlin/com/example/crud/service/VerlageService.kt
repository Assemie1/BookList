package com.example.crud.service


import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.repositories.Verlage
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service

@Service
class VerlageService (var repository: VerlageRepository) {
    fun createVerlag(newVerlag: VerlageDTORequest): VerlageDTOResponse {
        val save = repository.save(
            Verlage(
                verlagnummer = null,
                name = newVerlag.name

            )
        )
        return VerlageDTOResponse(verlagnummer = save.verlagnummer!!, name = save.name)
    }
}