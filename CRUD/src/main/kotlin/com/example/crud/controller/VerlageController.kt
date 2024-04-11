package com.example.crud.controller

import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.model.VerlageDTOResponse2
import com.example.crud.service.VerlagToAutorService
import com.example.crud.service.VerlageService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.lang.Error
import java.util.*

@RestController
@RequestMapping("/verlage")
class VerlageController (var VerlageService: VerlageService, var VerlagToAutorenService: VerlagToAutorService) {

    @PostMapping("/create")
    fun createVerlag(@RequestBody newVerlag: VerlageDTORequest): VerlageDTOResponse2 {
        return VerlageService.createVerlag(newVerlag)
    }

    @PostMapping("/{autornummer}/verlage/{verlagnummer}")
    fun VerlagToAutor(@PathVariable autornummer: Long, @PathVariable verlagnummer: Long): ResponseEntity<Any> {
        VerlagToAutorenService.VerlagToAutor(autornummer, verlagnummer)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/{verlagnummer}")
    fun getVerlag(@PathVariable verlagnummer: Long): Optional<VerlageDTOResponse2> {
        return VerlageService.getVerlag(verlagnummer)?: throw Error("Verlag wurde nicht gefunden")
    }
}