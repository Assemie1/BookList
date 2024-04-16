package com.example.crud.service

import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository
import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.model.VerlageDTORequest
import com.example.crud.repositories.VerlageRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class AutorenService (var repository: AutorenRepository, var verlagrepository: VerlageRepository, val VerlagToAutorService: VerlagToAutorService) {

    data class Add(
        var autornummer: Long?,
        val vorname: String,
        val nachname: String,
        val verlag: MutableList<String>,
        val buecher: MutableList<String>?,
    )

    fun addAutor(input: AutorenDTORequest, autornummer: Long?): Add{
        val save = repository.save(
            Autoren(
                autornummer = autornummer,
                vorname = input.vorname,
                nachname = input.nachname

            )
        )

        val name = mutableListOf<String>()

        if (input.verlag != null){
            for(verlag in input.verlag!!) {
                VerlagToAutorService.VerlagToAutor(autornummer = save.autornummer!!, verlagnummer = verlag!!)
            }

            for(verlag in input.verlag!!) {
                val verlagname = verlagrepository.findById(verlag!!).orElse(null)
                name.add(verlagname.name)
            }
        }
        return Add(save.autornummer, save.vorname, save.nachname, name, buecher = null)
    }

    fun createAutor(newAutor: AutorenDTORequest): AutorenDTOResponse {

        val autor = addAutor(newAutor, autornummer = null)
        return AutorenDTOResponse(autornummer = autor.autornummer!!, vorname = autor.vorname, nachname = autor.nachname, verlag = autor.verlag, buecher = null)
    }


    fun getAutor(autornummer: Long): AutorenDTOResponse? {
        val autor = repository.findById(autornummer).orElse(null) ?: return null
        val verlagName = autor.verlage.map { it.name }
        val buecher = autor.Autorbuecher.map {it.buchname}

        return repository.findById(autornummer).map { AutorenDTOResponse(autornummer = it.autornummer!!, vorname = it.vorname, nachname = it.nachname, verlag = verlagName, buecher = buecher)}.getOrNull()
    }

    fun updateAutor(autornummer: Long, updateAutor: AutorenDTORequest): AutorenDTOResponse?{
        val autor = repository.findById(autornummer).orElseThrow { throw IllegalArgumentException("Der Autor existiert nichtyyyyyyyyyyy") }
        val buecher = autor.Autorbuecher.map { it.buchname }
        return repository.findById(autornummer).map {
            val autor = addAutor(updateAutor, autornummer)
            AutorenDTOResponse (autornummer = autor.autornummer!!, vorname = autor.vorname, nachname = autor.nachname, buecher = buecher, verlag = autor.verlag)
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