package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class BuecherDTORequest(
    @JsonProperty("isbn")
    var isbn: Long,
    @JsonProperty("buchname")
    var buchname: String,
)