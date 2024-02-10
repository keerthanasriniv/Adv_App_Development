package com.learn.springsecurity.service;

import com.learn.springsecurity.model.Theme;
import com.learn.springsecurity.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {
    private final ThemeRepository themeRepository;

    @Autowired
    public ThemeService(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Optional<Theme> getThemeById(Long id) {
        return themeRepository.findById(id);
    }

    public Theme createTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public Theme updateTheme(Long id, Theme updatedTheme) {
        if (themeRepository.existsById(id)) {
            updatedTheme.setId(id);
            return themeRepository.save(updatedTheme);
        } else {
            throw new IllegalArgumentException("Theme with id " + id + " does not exist.");
        }
    }

    public String deleteTheme(Long id) {
        Optional<Theme> themeOptional = themeRepository.findById(id);
        if (themeOptional.isPresent()) {
            themeRepository.deleteById(id);
            return "Theme with ID " + id + " deleted successfully";
        } else {
            return "Theme with ID " + id + " not found";
        }
    }
}
