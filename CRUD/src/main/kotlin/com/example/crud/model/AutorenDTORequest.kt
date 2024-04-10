package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class AutorenDTORequest(
    @JsonProperty("vorname")
    var vorname: String,
    @JsonProperty("nachname")
    var nachname: String,
)



