package com.example.crud.repositories

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import jakarta.persistence.*


@Entity(name = "autoren")
data class Autoren(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var autornummer: Long?,
    var vorname: String,
    var nachname: String,
    @JsonIgnoreProperties("verlagbuecher", "autor")
    @ManyToMany(cascade = [CascadeType.ALL])
    @JoinTable(name = "autor_verlage",
        joinColumns = [JoinColumn(name = "autornummer")],
        inverseJoinColumns = [JoinColumn(name = "verlagnummer")])
    var verlage: MutableList<Verlage> = mutableListOf(),
    @OneToMany(mappedBy = "autor", cascade = [CascadeType.ALL])
    var Autorbuecher: MutableList<Buecher> = mutableListOf()
)

@Entity(name = "verlage")
data class Verlage(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var verlagnummer: Long?,
    var name: String,
    @JsonIgnoreProperties("verlage", "autorbuecher")
    @ManyToMany(mappedBy = "verlage", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var autor: MutableList<Autoren> = mutableListOf(),
    @OneToMany(mappedBy = "verlag", cascade = [CascadeType.ALL])
    var Verlagbuecher: MutableList<Buecher> = mutableListOf()
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
    @JsonIgnore
    var verlag: Verlage? = null,
    @ManyToOne
    @JoinColumn(name = "autornummer")
    @JsonIgnore
    var autor: Autoren? = null
)
