package com.example.crud.controller


import com.example.crud.model.BuecherDTORequest
import com.example.crud.model.BuecherDTOResponse
import com.example.crud.repositories.Buecher
import com.example.crud.repositories.BuecherRepository
import com.example.crud.repositories.VerlageRepository
import com.example.crud.service.BuecherService
import org.springframework.web.bind.annotation.*
import kotlin.jvm.optionals.getOrNull

@RestController
@CrossOrigin(origins = arrayOf("http://localhost:4200"))
@RequestMapping("/buecher")
class BuecherController (var BuecherService: BuecherService, var bucherRepository: BuecherRepository) {

    @PostMapping("/create")
    fun createBuch(@RequestBody newBuch: BuecherDTORequest): BuecherDTOResponse {
        return BuecherService.createBuch(newBuch)
    }

    @GetMapping("/all")
    fun getAllBuch(): List<BuecherDTOResponse>{
        val bucher = bucherRepository.findAll()
        return bucher.map { BuecherDTOResponse(buchnummer = it.buchnummer!!, buchname = it.buchname, isbn = it.isbn, verlagname = it.verlag?.name, autorvorname = it.autor?.vorname, autornachname = it.autor?.nachname, verlagnummer = it.verlag?.verlagnummer, autornummer = it.autor?.autornummer) }

    }

    @GetMapping("/{buchnummer}")
    fun getBuch(@PathVariable buchnummer : Long): BuecherDTOResponse {
        return BuecherService.getBuch(buchnummer)?: throw Error("Buch nicht gefunden")
    }

    @PutMapping("/{buchnummer}")
    fun updateBuch(@PathVariable buchnummer: Long, @RequestBody input: BuecherDTORequest): BuecherDTOResponse?{
        return BuecherService.updateBuch(buchnummer, input)
    }

    @DeleteMapping("/{buchnummer}")
    fun deleteBuch(@PathVariable buchnummer: Long){
        BuecherService.deleteBuch(buchnummer)
    }

}