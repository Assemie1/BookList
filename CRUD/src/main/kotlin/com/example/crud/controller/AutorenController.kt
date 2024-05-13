package com.example.crud.controller

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.repositories.Autoren
import com.example.crud.repositories.AutorenRepository
import com.example.crud.service.AutorenService
import com.example.crud.service.VerlagToAutorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RequestMapping("/autoren")
class AutorenController (var AutorenService: AutorenService, var VerlagToAutorenService: VerlagToAutorService, var autorenRepository: AutorenRepository){

    @PostMapping("/create")
    fun createAutor(@RequestBody newAutor: AutorenDTORequest): AutorenDTOResponse {
        return AutorenService.createAutor(newAutor)
    }

    @PostMapping("/{autornummer}/verlage/{verlagnummer}")
    fun VerlagToAutor(@PathVariable autornummer: Long, @PathVariable verlagnummer: Long): ResponseEntity<Any>{
        VerlagToAutorenService.VerlagToAutor(autornummer, verlagnummer)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/all")
    fun getAllAutoren(): List<Autoren> {
        return autorenRepository.findAll()
    }

    @GetMapping("/{autornummer}")
    fun getAutor(@PathVariable autornummer : Long): AutorenDTOResponse {
        return AutorenService.getAutor(autornummer)?: throw Error("Autor nicht gefunden")
    }

    @PutMapping("/{autornummer}")
    fun updateAutor(@PathVariable autornummer: Long, @RequestBody input: AutorenDTORequest): AutorenDTOResponse? {
        return AutorenService.updateAutor(autornummer, input)
    }

    @DeleteMapping("/{autornummer}")
    fun deleteAutor(@PathVariable autornummer: Long){
        AutorenService.deleteAutor(autornummer)
    }
}
