package com.example.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

data class VerlageDTORequest(
    @JsonProperty("name")
    var name: String,
    @JsonProperty("autor")
    var autor: List<Long>?,
)
