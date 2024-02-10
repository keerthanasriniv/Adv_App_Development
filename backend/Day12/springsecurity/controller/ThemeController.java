package com.learn.springsecurity.controller;

import com.learn.springsecurity.model.Theme;
import com.learn.springsecurity.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/theme")
public class ThemeController {

    private final ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping("/")
    public List<Theme> getAllThemes() {
        return themeService.getAllThemes();
    }

    @GetMapping("/{id}")
    public Optional<Theme> getThemeById(@PathVariable long id) {
        return themeService.getThemeById(id);
    }

    @PostMapping("/")
    public Theme createTheme(@RequestBody @NonNull Theme theme) {
        return themeService.createTheme(theme);
    }

    @PutMapping("/{id}")
    public Theme updateTheme(@PathVariable long id, @RequestBody Theme updatedTheme) {
        return themeService.updateTheme(id, updatedTheme);
    }

    @DeleteMapping("/{id}")
    public String deleteTheme(@PathVariable long id) {
        return themeService.deleteTheme(id);
    }
}
