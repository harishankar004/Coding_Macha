package com.example.Coding.Platofrm.controller;

import com.example.Coding.Platofrm.model.User;
import com.example.Coding.Platofrm.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Coding.Platofrm.dto.LoginRequest;
import java.util.*;
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            String message = userService.login(request.getUsername(), request.getPassword());
            return ResponseEntity.ok(Map.of("message", message)); // ✅ JSON
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", e.getMessage())); // ✅ JSON error
        }
    }



    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUser(username);
    }
}
