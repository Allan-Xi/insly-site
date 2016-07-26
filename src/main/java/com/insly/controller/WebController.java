package com.insly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class WebController {

    @RequestMapping("")
    public String index() {
        return "customer";
    }

    @RequestMapping("customer")
    public String customers() {
        return "customer";
    }

    @RequestMapping("customers/quickAddCustomer")
    public String quickAddCustomer() {
        return "quickAddCustomer";
    }
}

