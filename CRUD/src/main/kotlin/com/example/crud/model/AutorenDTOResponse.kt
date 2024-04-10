package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class AutorenDTOResponse(
    @JsonProperty("vorname")
    var vorname: String,
    @JsonProperty("nachname")
    var nachname: String,
    @JsonProperty("autorennummer")
    var autorennummer: Long,
)