package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class BuecherDTOResponse(
    @JsonProperty("buchnummer")
    var buchnummer: Long,
    @JsonProperty("isbn")
    var isbn: Long,
    @JsonProperty("buchname")
    var buchname: String,
)
