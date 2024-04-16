package com.example.crud.service

import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository
import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.repositories.VerlageRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class AutorenService (var repository: AutorenRepository, var verlagrepository: VerlageRepository, val VerlagToAutorService: VerlagToAutorService) {
    fun createAutor(newAutor: AutorenDTORequest): AutorenDTOResponse {
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

        return AutorenDTOResponse(autornummer = save.autornummer!!, vorname = save.vorname, nachname = save.nachname, verlag = name, buecher = null)
    }


    fun getAutor(autornummer: Long): AutorenDTOResponse? {
        val autor = repository.findById(autornummer).orElse(null) ?: return null
        val verlagName = autor.verlage.map { it.name }
        val buecher = autor.Autorbuecher.map {it.buchname}

        return repository.findById(autornummer).map { AutorenDTOResponse(autornummer = it.autornummer!!, vorname = it.vorname, nachname = it.nachname, verlag = verlagName, buecher = buecher)}.getOrNull()
    }

    fun updateAutor(autornummer: Long, updateAutor: AutorenDTORequest): AutorenDTOResponse?{
        val autor = repository.findById(autornummer).orElseThrow { throw IllegalArgumentException("Der Autor existiert nichty") }
        return repository.findById(autornummer).map {
            val save = repository.save(
                Autoren(
                    autornummer = it.autornummer,
                    vorname = updateAutor.vorname,
                    nachname = updateAutor.nachname,
                )

            )
            val buecher = autor.Autorbuecher.map { it.buchname }

            val name = mutableListOf<String>()
            if (updateAutor.verlag != null){
                for(verlag in updateAutor.verlag!!) {
                    VerlagToAutorService.VerlagToAutor(autornummer = save.autornummer!!, verlagnummer = verlag!!)
                }

                for(verlag in updateAutor.verlag!!) {
                    val verlagname = verlagrepository.findById(verlag!!).orElse(null)
                    name.add(verlagname.name)
                }
            }

            AutorenDTOResponse (autornummer = save.autornummer!!, vorname = save.vorname, nachname = save.nachname, buecher = buecher, verlag = name )
        }.orElseGet(null)
    }

    fun deleteAutor(autornummer: Long) {
        val autor = repository.findById(autornummer)
            .orElseThrow { throw IllegalArgumentException("Der Autor existiert nichty") }

        autor.verlage.clear()

        autor.Autorbuecher.forEach { buch -> buch.autor = null }
        autor.Autorbuecher.clear()

        repository.delete(autor)
    }

}