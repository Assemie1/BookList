package com.example.crud.controller

import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.service.VerlageService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/verlage")
class VerlageController (var VerlageService: VerlageService) {

    @PostMapping("/create")
    fun createVerlag(@RequestBody newVerlag: VerlageDTORequest): VerlageDTOResponse {
        return VerlageService.createVerlag(newVerlag)
    }
}