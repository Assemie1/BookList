package com.example.crud.controller

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.service.AutorenService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/autoren")
class AutorenController (var AutorenService: AutorenService){

    @PostMapping("/create")
    fun createAutor(@RequestBody newAutor: AutorenDTORequest): AutorenDTOResponse {
        return AutorenService.createAutor(newAutor)
    }

    @PostMapping("/{autornummer}/verlage/{verlagnummer}")
    fun VerlagToAutor(@PathVariable autornummer: Long, @PathVariable verlagnummer: Long): ResponseEntity<Any>{
        AutorenService.VerlagToAutor(autornummer, verlagnummer)
        return ResponseEntity.ok().build()
    }

}
