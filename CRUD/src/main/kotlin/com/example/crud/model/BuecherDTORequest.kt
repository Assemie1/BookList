package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class BuecherDTORequest(
    @JsonProperty("isbn")
    var isbn: Long,
    @JsonProperty("buchname")
    var buchname: String,
    @JsonProperty("beschreibung")
    var beschreibung: String,
    @JsonProperty("verlagnummer")
    var verlagnummer: Long,
    @JsonProperty("autornummer")
    var autornummer: Long,

)
