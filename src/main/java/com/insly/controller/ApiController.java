package com.insly.controller;


import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.insly.service.ApiService;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
	@Autowired
	private ApiService apiService;

	static private ObjectMapper mapper = new ObjectMapper();
	
	@RequestMapping("login")
	static public String login() throws Throwable{
		return "success";
	}
	
    @RequestMapping("users")
    // pagination should be supported later
	public String listCustomers() throws Throwable{
  	   	JsonNode users = apiService.getUserList();
  	   	JsonNode result = JsonUtils.modifyCustomersJson(users, mapper);

   	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("policies")
    public String listPolicies() throws Throwable{
 	   	JsonNode policies = ApiUtils.getPolicyList();
 	   	JsonNode result = JsonUtils.modifyGroupJson(policies, JsonContract.FIELD_POLICIES, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("claims")
    // pagination should be supported later
    public String listClaims() throws Throwable{
    	JsonNode claims = ApiUtils.getClaimList();
    	JsonNode result = JsonUtils.modifyGroupJson(claims, JsonContract.FIELD_CLAIMS, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    

    
    @RequestMapping("quotes")
    // pagination should be supported later
	public String listQuotes() throws Throwable {
    	JsonNode quotes = ApiUtils.getQuoteList();
    	JsonNode result = JsonUtils.modifyGroupJson(quotes, JsonContract.FIELD_QUOTES, mapper);
 	   	return mapper.writeValueAsString(result);
    }
    
    @RequestMapping("quotes/{id}")
	public String getQuote(@PathVariable String id) throws Throwable {
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
    	return "";
    }
    

    @RequestMapping("policies/{id}/claims")
    public String getPolicyClaims(@PathVariable String id) throws Throwable{
    	List<String> keys = new ArrayList<String>();
    	keys.add(JsonContract.FIELD_CLAIMS);
    	JsonNode result = ApiUtils.getExpandedObject(JsonContract.FIELD_POLICIES, id, keys);
    	
    	return mapper.writeValueAsString(result.path(JsonContract.FIELD_POLICY));
    }
    
}

