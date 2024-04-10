package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class VerlageDTOResponse(
    @JsonProperty("name")
    var name: String,
    @JsonProperty("verlagnummer")
    var verlagnummer: Long,
)