package com.insly.controller;


import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
	
	@RequestMapping("login")
	static public String login() throws Throwable{
		return "success";
	}
	
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
    
    @RequestMapping("customers/{id}/policies")
    public String customerPolicies(@PathVariable String id ) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("policies");
    	Map<String, JsonNode> result = ApiUtils.getExpandedObject("users", id, "users", keys);
    	
    	return mapper.writeValueAsString(mapper.convertValue(result, JsonNode.class)); 
    	
    }
    
    @RequestMapping("customers/{id}/vehicles")
    public String getCustomerVehicles(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("vehicles");
    	Map<String, JsonNode> result = ApiUtils.getExpandedObject("users", id, "users", keys);
    	
    	return mapper.writeValueAsString(mapper.convertValue(result, JsonNode.class));
    }
    
    @RequestMapping("customers/{id}/quotes")
    public String getCustomerQuotes(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("quotes");
    	Map<String, JsonNode> result = ApiUtils.getExpandedObject("users", id, "users", keys);
    	
    	return mapper.writeValueAsString(mapper.convertValue(result, JsonNode.class));
    }
    
    @RequestMapping("customers/{id}/claims")
    public String getCustomerClaims(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("claims");
    	Map<String, JsonNode> result = ApiUtils.getExpandedObject("users", id, "users", keys);
    	
    	return mapper.writeValueAsString(mapper.convertValue(result, JsonNode.class));
    }
    
    @RequestMapping("customers/{id}/crm")
    public String getCustomerCRM(@PathVariable String id) throws Throwable{
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
    

    @RequestMapping("policies/{id}/claims")
    public String getPolicyClaims(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("claims");
    	Map<String, JsonNode> result = ApiUtils.getExpandedObject("policies", id, "policy", keys);
    	
    	return mapper.writeValueAsString(mapper.convertValue(result, JsonNode.class));
    }
    
}

