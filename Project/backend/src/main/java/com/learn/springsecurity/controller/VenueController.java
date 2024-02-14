package com.learn.springsecurity.controller;

import com.learn.springsecurity.model.Venue;
import com.learn.springsecurity.service.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/venue")
public class VenueController {

    private final VenueService venueService;

    @Autowired
    public VenueController(VenueService venueService) {
        this.venueService = venueService;
    }

    @GetMapping("/")
    public List<Venue> getAllVenues() {
        return venueService.getAllVenues();
    }

    @GetMapping("/{id}")
    public Optional<Venue> getVenueById(@PathVariable long id) {
        return venueService.getVenueById(id);
    }

    @PostMapping("/")
    public Venue createVenue(@RequestBody @NonNull Venue venue) {
        return venueService.createVenue(venue);
    }

    @PutMapping("/{id}")
    public Venue updateVenue(@PathVariable long id, @RequestBody Venue updatedVenue) {
        return venueService.updateVenue(id, updatedVenue);
    }

    @DeleteMapping("/{id}")
    public String deleteVenue(@PathVariable long id) {
        return venueService.deleteVenue(id);
    }
}
