package com.example.crud.service


import com.example.crud.model.BuecherDTORequest
import com.example.crud.model.BuecherDTOResponse
import com.example.crud.repositories.Buecher
import com.example.crud.repositories.BuecherRepository
import org.springframework.stereotype.Service

@Service
class BuecherService (var repository: BuecherRepository) {
    fun createBuch(newBuch: BuecherDTORequest): BuecherDTOResponse {
        val save = repository.save(
            Buecher(
                buchnummer = null,
                isbn = newBuch.isbn,
                buchname = newBuch.buchname

            )
        )
        return BuecherDTOResponse(buchnummer = save.buchnummer!!, isbn = save.isbn, buchname = save.buchname)
    }
}