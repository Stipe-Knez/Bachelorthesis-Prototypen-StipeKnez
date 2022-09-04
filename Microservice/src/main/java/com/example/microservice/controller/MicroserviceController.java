package com.example.microservice.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/microservice")
@CrossOrigin(origins = "*")
public class MicroserviceController {

    @GetMapping("/request")
    public String response() {
        return "Hallo, dies ist die geschützte Ressource";
    }
}

