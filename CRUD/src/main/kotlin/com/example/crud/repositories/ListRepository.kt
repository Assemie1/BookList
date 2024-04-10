package com.example.crud.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AutorenRepository : JpaRepository<Autoren, Long>
@Repository
interface VerlageRepository : JpaRepository<Verlage, Long>
@Repository
interface BuecherRepository : JpaRepository<Buecher, Long>

