package com.example.crud

import com.example.crud.repositories.*
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DataLoader(private val autorenRepository: AutorenRepository,
                 private val verlageRepository: VerlageRepository,
                 private val buecherRepository: BuecherRepository) : CommandLineRunner {

    override fun run(vararg args: String?) {
        val autor1 = Autoren(null, "Andreas", "Winkelmann")
        val autor2 = Autoren(null, "Rebecca", "Yarros")
        autorenRepository.saveAll(listOf(autor1, autor2))

        val verlag1 = Verlage(null, "Rowohlt")
        val verlag2 = Verlage(null, "DTV")
        verlageRepository.saveAll(listOf(verlag1, verlag2))

        autor1.verlage.add(verlag1)
        autor1.verlage.add(verlag2)
        autor2.verlage.add(verlag2)
        autorenRepository.saveAll(listOf(autor1, autor2))

        val buch1 = Buecher(null, 1234567890123, "Das Letzte was du Hoerst", "Irgendwas mit nem komischen Podcaster", verlag1, autor1)
        val buch2 = Buecher(null, 9876543210987, "Fourth Wing", "Flieg oder Stirb", verlag2, autor2)
        val buch3 = Buecher(null, 9876543210988, "Iron Flame", "Veneni, Wyvern und Eisesrneflammen", verlag2, autor2)
        val buch4 = Buecher(null, 77777777, "Dest", "das is nen dest", verlag1, autor2)
        buecherRepository.saveAll(listOf(buch1, buch2, buch3, buch4))
    }
}
