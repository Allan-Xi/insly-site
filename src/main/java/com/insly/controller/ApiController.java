package com.insly.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    @RequestMapping("users")
    // pagination should be supported later
    public String list() {
    	
        return "{\n" +
                "    \"total\": 14,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "            \"name\": \"TipiakInc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"annmarie_castros@gmail.com\",\n" +
                "            \"phone\": \"phone:936-751-7961\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"20 20 Printing Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"merilyn_bayless@cox.net\",\n" +
                "            \"phone\": \"phone: 408-758-5015\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Whistler, Lori\",\n" +
                "            \"birthdate\": \"01/06/1980\",\n" +
                "            \"email\": \"lori@whistler.org\",\n" +
                "            \"phone\": \"phone: 763-347-5457\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }
    
    @RequestMapping("policies")
    public String listPolicies(){
        return "{\n" +
                "    \"total\": 12,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132661\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132662\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132663\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132664\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132665\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132666\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132667\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132668\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132669\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132670\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132671\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132672\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n"+
                "            \"status\": \"ON_RISK\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
 
    }
}

