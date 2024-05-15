package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class BuecherDTOResponse(
    @JsonProperty("buchnummer")
    var buchnummer: Long,
    @JsonProperty("isbn")
    var isbn: Long,
    @JsonProperty("buchname")
    var buchname: String,
    @JsonProperty("beschreibung")
    var beschreibung: String?,
    @JsonProperty("verlagnummer")
    var verlagnummer: Long?,
    @JsonProperty("autornummer")
    var autornummer: Long?,
    @JsonProperty("verlagname")
    var verlagname: String?,
    @JsonProperty("autorvorname")
    var autorvorname: String?,
    @JsonProperty("autornachname")
    var autornachname: String?,
)
