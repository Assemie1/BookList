package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class VerlageDTOResponse(
    @JsonProperty("name")
    var name: String,
    @JsonProperty("verlagnummer")
    var verlagnummer: Long,
    @JsonProperty("autorVorname")
    var autorVorname: List<String>?,
    @JsonProperty("autorNachname")
    var autorNachname: List<String>?,
    @JsonProperty("buecher")
    var buecher: List<String>?,
)