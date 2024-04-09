package com.example.crud.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TaskRepository : JpaRepository<Autoren, Long>
@Repository
interface TaskRepository2 : JpaRepository<Verlage, Long>
@Repository
interface TaskRepository3 : JpaRepository<Buecher, Long>

