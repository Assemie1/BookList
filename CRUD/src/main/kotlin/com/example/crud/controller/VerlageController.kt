package com.example.crud.controller

import com.example.crud.model.VerlageDTORequest
import com.example.crud.model.VerlageDTOResponse
import com.example.crud.repositories.Verlage
import com.example.crud.repositories.VerlageRepository
import com.example.crud.service.VerlagToAutorService
import com.example.crud.service.VerlageService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.Error
import java.util.*

@RestController
@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RequestMapping("/verlage")
class VerlageController(
    var VerlageService: VerlageService,
    var VerlagToAutorenService: VerlagToAutorService,
    val verlageRepository: VerlageRepository,
    repository: VerlageRepository
) {

    @PostMapping("/create")
    fun createVerlag(@RequestBody newVerlag: VerlageDTORequest): VerlageDTOResponse {
        return VerlageService.createVerlag(newVerlag)
    }

    @PostMapping("/{autornummer}/verlage/{verlagnummer}")
    fun VerlagToAutor(@PathVariable autornummer: Long, @PathVariable verlagnummer: Long): ResponseEntity<Any> {
        VerlagToAutorenService.VerlagToAutor(autornummer, verlagnummer)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/all")
    fun getAllVerlage(): List<Verlage> {
        return verlageRepository.findAll()
    }

    @GetMapping("/{verlagnummer}")
    fun getVerlag(@PathVariable verlagnummer: Long): Optional<VerlageDTOResponse> {
        return VerlageService.getVerlag(verlagnummer)?: throw Error("Verlag wurde nicht gefunden")
    }

    @PutMapping("/{verlagnummer}")
    fun updateVerlag(@PathVariable verlagnummer: Long, @RequestBody updateVerlag: VerlageDTORequest): VerlageDTOResponse?{
        return VerlageService.updateVerlag(verlagnummer, updateVerlag)
    }

    @DeleteMapping("/{verlagnummer}")
    fun deleteVerlag(@PathVariable verlagnummer: Long){
        VerlageService.deleteVerlag(verlagnummer)
    }


}