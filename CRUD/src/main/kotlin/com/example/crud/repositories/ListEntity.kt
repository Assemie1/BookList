package com.example.crud.repositories

import jakarta.persistence.*


@Entity(name = "autoren")
data class Autoren(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var autorennummer: Long?,
    var vorname: String,
    var nachname: String,
    @ManyToMany(cascade = [CascadeType.ALL])
    @JoinTable(name = "autoren_verlage",
        joinColumns = [JoinColumn(name = "autorennummer")],
        inverseJoinColumns = [JoinColumn(name = "verlagnummer")])
    var verlage: List<Verlage> = mutableListOf(),
    @OneToMany(mappedBy = "autoren", cascade = [CascadeType.ALL])
    var buecher: List<Buecher> = mutableListOf()
)
@Entity(name = "verlage")
data class Verlage(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var verlagnummer: Long?,
    var name: String,
    @ManyToMany(mappedBy = "verlage")
    var autoren: List<Autoren> = mutableListOf(),
    @OneToMany(mappedBy = "verlag", cascade = [CascadeType.ALL])
    var buecher: List<Buecher> = mutableListOf()
)
@Entity(name = "buecher")
data class Buecher(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var buchnummer: Long?,
    var isbn: Long,
    var buchname: String,
    @ManyToOne
    @JoinColumn(name = "verlagnummer")
    var verlag: Verlage? = null,
    @ManyToOne
    @JoinColumn(name = "autorennummer")
    var autoren: Autoren? = null
)
