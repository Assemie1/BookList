package com.example.crud.controller


import com.example.crud.model.BuecherDTORequest
import com.example.crud.model.BuecherDTOResponse
import com.example.crud.service.BuecherService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.lang.Error

@RestController
@RequestMapping("/buecher")
class BuecherController (var BuecherService: BuecherService) {

    @PostMapping("/create")
    fun createBuch(@RequestBody newBuch: BuecherDTORequest): BuecherDTOResponse {
        return BuecherService.createBuch(newBuch)
    }

    @GetMapping("/{buchnummer}")
    fun getBuch(@PathVariable buchnummer : Long): BuecherDTOResponse {
        return BuecherService.getBuch(buchnummer)?: throw Error("Buch nicht gefunden")
    }

}