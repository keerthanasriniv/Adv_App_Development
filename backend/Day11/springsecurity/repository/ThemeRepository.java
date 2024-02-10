package com.learn.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.Theme;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Long> {
}
