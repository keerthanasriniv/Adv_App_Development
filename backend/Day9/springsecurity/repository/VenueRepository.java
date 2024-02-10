package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.Venue;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
}
