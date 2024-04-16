package com.example.crud.service


import com.example.crud.repositories.AutorenRepository
import com.example.crud.repositories.VerlageRepository
import org.springframework.stereotype.Service
import java.util.NoSuchElementException

@Service
class VerlagToAutorService (var repository: AutorenRepository, var verlagrepository: VerlageRepository) {

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