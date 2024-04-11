package com.example.crud.controller

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.model.AutorenDTOResponse2
import com.example.crud.service.AutorenService
import com.example.crud.service.VerlagToAutorService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.Error

@RestController
@RequestMapping("/autoren")
class AutorenController (var AutorenService: AutorenService, var VerlagToAutorenService: VerlagToAutorService){

    @PostMapping("/create")
    fun createAutor(@RequestBody newAutor: AutorenDTORequest): AutorenDTOResponse2 {
        return AutorenService.createAutor(newAutor)
    }

    @PostMapping("/{autornummer}/verlage/{verlagnummer}")
    fun VerlagToAutor(@PathVariable autornummer: Long, @PathVariable verlagnummer: Long): ResponseEntity<Any>{
        VerlagToAutorenService.VerlagToAutor(autornummer, verlagnummer)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/{autornummer}")
    fun getAutor(@PathVariable autornummer : Long): AutorenDTOResponse2 {
        return AutorenService.getAutor(autornummer)?: throw Error("Autor nicht gefunden")
    }

}
