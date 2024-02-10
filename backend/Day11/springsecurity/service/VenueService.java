package com.learn.springsecurity.service;

import com.learn.springsecurity.model.Venue;
import com.learn.springsecurity.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {
    private final VenueRepository venueRepository;

    @Autowired
    public VenueService(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    public Optional<Venue> getVenueById(Long id) {
        return venueRepository.findById(id);
    }

    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    public Venue updateVenue(Long id, Venue updatedVenue) {
        if (venueRepository.existsById(id)) {
            updatedVenue.setId(id);
            return venueRepository.save(updatedVenue);
        } else {
            throw new IllegalArgumentException("Venue with id " + id + " does not exist.");
        }
    }

    public String deleteVenue(Long id) {
        Optional<Venue> venueOptional = venueRepository.findById(id);
        if (venueOptional.isPresent()) {
            venueRepository.deleteById(id);
            return "Venue with ID " + id + " deleted successfully";
        } else {
            return "Venue with ID " + id + " not found";
        }
    }
}
