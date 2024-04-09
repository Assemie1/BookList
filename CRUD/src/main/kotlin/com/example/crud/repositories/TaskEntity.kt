package com.example.crud.repositories

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity(name = "autoren")
data class Autoren(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var autorennummer: Long?,
    var vorname: String,
    var nachname: String,
)
@Entity(name = "verlage")
data class Verlage(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var verlagnummer: Long?,
    var verlagname: String,
)
@Entity(name = "buecher")
data class Buecher(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var verlagnummer: Long?,
    var autorennummer: Long?,
    var buchname: String,
)
