package com.insly.controller;


import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.insly.ApiUtils;
import com.insly.JsonUtils;

@RestController
@RequestMapping("/api")
public class ApiController {
	static private ObjectMapper mapper = new ObjectMapper();

    @RequestMapping("users")
    // pagination should be supported later
    static public String listCustomers() throws Throwable{
  	   	JsonNode users = ApiUtils.getUserList();
   	   	return mapper.writeValueAsString(users);
    }
    
    @RequestMapping("users/{id}")
    static public String getCustomer(@PathVariable String id) throws Throwable{
    	JsonNode user = ApiUtils.getUser(id);
   	   	return mapper.writeValueAsString(user);
    }
    
    @RequestMapping("policies")
    static public String listPolicies() throws Throwable{
 	   	JsonNode policies = ApiUtils.getPolicyList(); 	   	
 	   	return mapper.writeValueAsString(policies);
    }
    
    @RequestMapping("policies/{id}")
    static public String getPolicy(@PathVariable String id) throws Throwable{
    	JsonNode policy = ApiUtils.getPolicy(id);
    	return mapper.writeValueAsString(policy);
    }
    
    @RequestMapping("claims")
    // pagination should be supported later
    static public String listClaims() throws Throwable{
    	JsonNode claims = ApiUtils.getClaimList();
    	return mapper.writeValueAsString(claims);
    }
    
    @RequestMapping("claims/{id}")
    // pagination should be supported later
    static public String getClaim(@PathVariable String id) throws Throwable{
    	JsonNode claim = ApiUtils.getClaim(id);
    	return mapper.writeValueAsString(claim);
    }
    
    @RequestMapping("quotes")
    // pagination should be supported later
    static public String listQuotes() throws Throwable {
    	JsonNode quotes = ApiUtils.getQuoteList();
    	return mapper.writeValueAsString(quotes);
    }
    
    @RequestMapping("quotes/{id}")
    static public String getQuote(@PathVariable String id) throws Throwable {
    	JsonNode quote = ApiUtils.getQuote(id);
    	return mapper.writeValueAsString(quote);
    }
    
    @RequestMapping("customers/{number}/policies")
    public String customerPolicies(@PathVariable String number ){
    	return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"policy_number\":	\"AAAAAAAAAAA\",\n"+
                "			\"insurer\":	\"Journey Ltd\",\n"+
                "			\"validity\":	\"valid\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
    }
    
    @RequestMapping("customers/{number}/vehicles")
    public String getCustomerVehicles(@PathVariable String number){
    	return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"vehicle\":	\"Toyata S1\",\n"+
                "			\"type\":	\"whatever\",\n"+
                "			\"status\":	\"valid\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
    }
    
    @RequestMapping("customers/{number}/quotes")
    public String getCustomerQuotes(@PathVariable String number){
    	return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"quote_number\":	\"1\",\n"+
                "			\"object\":	\"vehicle\",\n"+
                "			\"status\":	\"valid\",\n"+
                "			\"broker\":	\"broker\",\n"+
                "			\"date\":	\"01/01/2016\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
    }
    
    @RequestMapping("customers/{number}/claims")
    public String getCustomerClaims(@PathVariable String number){
    	return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"claim_id\":	\"BBBBBBBAAABB\",\n"+
                "			\"object\":	\"vehicle\",\n"+
                "			\"customer\":	\"Piano\",\n"+
                "			\"status\":	\"valid\",\n"+
                "			\"broker\":	\"broker\",\n"+
                "			\"date\":	\"01/01/2016\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
    }
    
    @RequestMapping("customers/{number}/crm")
    public String getCustomerCRM(@PathVariable String number){
    	return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"task\":	\"Finish website\",\n"+
                "			\"description\":	\"Finish this website in 2 days!\",\n"+
                "			\"responsible\":	\"Journey\",\n"+
                "			\"status\":	\"valid\",\n"+
                "			\"date\":	\"01/01/2016\"\n"+
                "        }\n" +
                "    ]\n" +
                "}";
    }
    

}

