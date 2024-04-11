package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty
import java.util.SimpleTimeZone

data class AutorenDTOResponse2(
    @JsonProperty("vorname")
    var vorname: String,
    @JsonProperty("nachname")
    var nachname: String,
    @JsonProperty("autornummer")
    var autornummer: Long,
    @JsonProperty("verlag")
    var verlag: List<String>?,
    @JsonProperty("buecher")
    var buecher: List<String>?,
)