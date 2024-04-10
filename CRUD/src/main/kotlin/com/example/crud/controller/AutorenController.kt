package com.example.crud.controller

import com.example.crud.model.AutorenDTORequest
import com.example.crud.model.AutorenDTOResponse
import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.service.AutorenService
import com.example.crud.service.VerlageService
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
}
