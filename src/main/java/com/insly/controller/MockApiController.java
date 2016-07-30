package com.insly.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Mock the Production API
 */


@RestController
@RequestMapping("/mock")
public class MockApiController {
    @RequestMapping("users")
    public String users() {
        return "{\n" +
                "    \"users\": [\n" +
                "        {\n" +
                "            \"user_id\": \"1\",\n" +
                "            \"first_name\": \"Ernst\",\n" +
                "            \"middle_initial\": \"Ingmar\",\n" +
                "            \"last_name\": \"Bergman\",\n" +
                "            \"gender\": \"male\",\n" +
                "            \"ssn\": \"12345678\",\n" +
                "            \"license_number\": \"87654321\",\n" +
                "            \"address\": \"Beijing, China\",\n" +
                "            \"address2\": \"\",\n" +
                "            \"city\": \"Beijing\",\n" +
                "            \"state\": \"Beijing\",\n" +
                "            \"zip_code\": \"10000\",\n" +
                "            \"country\": \"China\",\n" +
                "            \"profile_photo\": \"\",\n" +
                "            \"short_bio\": \"\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"user_id\": \"2\",\n" +
                "            \"first_name\": \"Allen\",\n" +
                "            \"middle_initial\": \"Stewart\",\n" +
                "            \"last_name\": \"Konigsberg\",\n" +
                "            \"gender\": \"male\",\n" +
                "            \"ssn\": \"12345678\",\n" +
                "            \"license_number\": \"87654321\",\n" +
                "            \"address\": \"Beijing, China\",\n" +
                "            \"address2\": \"\",\n" +
                "            \"city\": \"Beijing\",\n" +
                "            \"state\": \"Beijing\",\n" +
                "            \"zip_code\": \"10000\",\n" +
                "            \"country\": \"China\",\n" +
                "            \"profile_photo\": \"\",\n" +
                "            \"short_bio\": \"\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }
}
