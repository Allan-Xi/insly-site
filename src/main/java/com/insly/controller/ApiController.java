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
import com.insly.JsonContract;
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
  	   	JsonNode result = JsonUtils.modifyCustomersJson(users, mapper);
   	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("users/{id}")
    static public String getCustomer(@PathVariable String id) throws Throwable{
    	JsonNode user = ApiUtils.getUserById(id);
    	JsonNode result = JsonUtils.modifyCustomersJson(user, mapper);
   	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("policies")
    static public String listPolicies() throws Throwable{
 	   	JsonNode policies = ApiUtils.getPolicyList();
 	   	JsonNode result = JsonUtils.modifyGroupJson(policies, JsonContract.FIELD_POLICIES, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("policies/{id}")
    static public String getPolicy(@PathVariable String id) throws Throwable{
    	JsonNode policy = ApiUtils.getPolicy(id);
    	JsonNode result = JsonUtils.modifyGroupJson(policy, JsonContract.FIELD_POLICY, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("claims")
    // pagination should be supported later
    static public String listClaims() throws Throwable{
    	JsonNode claims = ApiUtils.getClaimList();
    	JsonNode result = JsonUtils.modifyGroupJson(claims, JsonContract.FIELD_CLAIMS, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("claims/{id}")
    // pagination should be supported later
    static public String getClaim(@PathVariable String id) throws Throwable{
    	JsonNode claim = ApiUtils.getClaim(id);
    	JsonNode result = JsonUtils.modifyGroupJson(claim, JsonContract.FIELD_CLAIM, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("quotes")
    // pagination should be supported later
    static public String listQuotes() throws Throwable {
    	JsonNode quotes = ApiUtils.getQuoteList();
    	JsonNode result = JsonUtils.modifyGroupJson(quotes, JsonContract.FIELD_QUOTES, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("quotes/{id}")
    static public String getQuote(@PathVariable String id) throws Throwable {
    	JsonNode quote = ApiUtils.getQuote(id);
    	JsonNode result = JsonUtils.modifyGroupJson(quote, JsonContract.FIELD_QUOTE, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("customers/{id}/policies")
    public String customerPolicies(@PathVariable String id ) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add(JsonContract.FIELD_POLICIES);
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_USERS, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_USER));
    	
    }
    
    @RequestMapping("customers/{id}/vehicles")
    public String getCustomerVehicles(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("vehicles");
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_USERS, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_USER));
    }
    
    @RequestMapping("customers/{id}/quotes")
    public String getCustomerQuotes(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add("quotes");
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_USERS, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_USER));
    }
    
    @RequestMapping("customers/{id}/claims")
    public String getCustomerClaims(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add(JsonContract.FIELD_CLAIMS);
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_USERS, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_USER));
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
    	keys.add(JsonContract.FIELD_CLAIMS);
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_POLICIES, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_POLICY));
    }
    
}

