package com.learn.springsecurity.service;

import com.learn.springsecurity.model.Booking;
import com.learn.springsecurity.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        if (bookingRepository.existsById(id)) {
            updatedBooking.setId(id);
            return bookingRepository.save(updatedBooking);
        } else {
            throw new IllegalArgumentException("Booking with id " + id + " does not exist.");
        }
    }

    public String deleteBooking(Long id) {
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        if (bookingOptional.isPresent()) {
            bookingRepository.deleteById(id);
            return "Booking with ID " + id + " deleted successfully";
        } else {
            return "Booking with ID " + id + " not found";
        }
    }
}
