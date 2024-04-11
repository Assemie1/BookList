package com.example.crud.service

import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository
import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.model.AutorenDTOResponse2
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class AutorenService (var repository: AutorenRepository, var verlagrepository: VerlageRepository, val VerlagToAutorService: VerlagToAutorService) {
    fun createAutor(newAutor: AutorenDTORequest): AutorenDTOResponse2 {
        val save = repository.save(
            Autoren(
                autornummer = null,
                vorname = newAutor.vorname,
                nachname = newAutor.nachname

            )
        )

        val name = mutableListOf<String>()

        if (newAutor.verlag != null){
            for(verlag in newAutor.verlag!!) {
                VerlagToAutorService.VerlagToAutor(autornummer = save.autornummer!!, verlagnummer = verlag!!)
            }

            for(verlag in newAutor.verlag!!) {
                val verlagname = verlagrepository.findById(verlag!!).orElse(null)
                name.add(verlagname.name)
            }
        }

        return AutorenDTOResponse2(autornummer = save.autornummer!!, vorname = save.vorname, nachname = save.nachname, verlag = name, buecher = null)
    }


    fun getAutor(autornummer: Long): AutorenDTOResponse2? {
        val autor = repository.findById(autornummer).orElse(null) ?: return null
        val verlagName = autor.verlage.map { it.name }
        val buecher = autor.Autorbuecher.map {it.buchname}

        return repository.findById(autornummer).map { AutorenDTOResponse2(autornummer = it.autornummer!!, vorname = it.vorname, nachname = it.nachname, verlag = verlagName, buecher = buecher)}.getOrNull()
    }

}