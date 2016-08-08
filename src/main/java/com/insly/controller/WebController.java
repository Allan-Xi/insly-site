package com.insly.controller;

import java.io.File;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.insly.ApiUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.insly.JsonContract;
import com.insly.JsonUtils;

import freemarker.template.Template;

import static com.insly.ApiUtils.getObjectByRelativePath;


@Controller
@RequestMapping("/")
public class WebController {
	private ObjectMapper mapper = new ObjectMapper();
	
    @RequestMapping("")
    public String index() {
        return "login";
    }

	@RequestMapping("login")
	public String login() {
		return "login";
	}

    @RequestMapping("customer")
    public String customers() {
        return "customer";
    }
    
    @RequestMapping("customer-detail/{id}")
    public ModelAndView customerDetail(@PathVariable String id) throws Throwable{
    	String userString = getCustomer(id);
    	JsonNode root = mapper.readTree(userString).path("user");
    	Map<String, Object> userValues = mapper.convertValue(root, Map.class);
    	
    	ModelAndView mav = new ModelAndView("customer_detail");
    	mav.addObject("customer", userValues);
    	
    	return mav;
    }
    
    @RequestMapping("customer/addquick")
    public String quickAddCustomer() {
        return "customer_addquick";
    }
    
    @RequestMapping("policies")
    public String policies(){
    	return "policies";
    }
    
    @RequestMapping("policies/addquick")
    public String quickAddPolicy(){
    	return "policy_addquick";
    }
    
    @RequestMapping("policy-detail/{id}")
    public ModelAndView policyDetail(@PathVariable String id) throws Throwable{
    	String policyString = getPolicy(id);
    	JsonNode root = mapper.readTree(policyString).path("policy");
    	Map<String, Object> policy = mapper.convertValue(root, Map.class);    	

		// vehicle api is not ready
		// String vehicleUrl = (String) policyValues.get("vehicle");
		// String vehicleString = getObjectByRelativePath(vehicleUrl);
		// Map<String, Object> vehicle = mapper.convertValue(mapper.readTree(vehicleString).get("users"), Map.class);
		
		// should always use API controller.
		String insuredUrl = (String) policy.get("insured");
		JsonNode user = JsonUtils.modifyCustomersJson(getObjectByRelativePath(insuredUrl), mapper);
		Map<String, Object> insured = mapper.convertValue(user.path(JsonContract.FIELD_USER), Map.class);
		
    	
    	ModelAndView mav = new ModelAndView("policy_detail");
    	
    	mav.addObject("policy", policy);
		mav.addObject("insured", insured);
    	return mav;
    }
    
    @RequestMapping("claims")
    public String claims(){
    	return "claims";
    }
    
    @RequestMapping("claim-detail/{id}")
    public ModelAndView claimDetail(@PathVariable String id) throws Throwable{
    	String claimString = getClaim(id);
    	JsonNode root = mapper.readTree(claimString).get("claim");
    	Map<String, Object> claim = mapper.convertValue(root, Map.class);
		
    	String policyUrl = (String) claim.get("policy");
    	JsonNode object = JsonUtils.modifyGroupJson(getObjectByRelativePath(policyUrl), "policy", mapper);
    	Map<String, Object> policy = mapper.convertValue(object.get("policy"), Map.class);
    	
		String insuredUrl = (String) claim.get("driver");
		object = JsonUtils.modifyCustomersJson(getObjectByRelativePath(insuredUrl), mapper);
    	Map<String, Object> insured = mapper.convertValue(object.get("user"), Map.class);
		
    	Map<String, Object> claimant = new HashMap<String,Object>();
    	
    	ModelAndView mav = new ModelAndView("claim_detail");
    	mav.addObject("claim", claim);
    	mav.addObject("policy", policy);
    	mav.addObject("insured", insured);
    	mav.addObject("claimant", claimant);
    	
    	return mav;
    }
    
    @RequestMapping("quotes")
    public String quotes(){
    	return "quotes";
    }

	private String getPolicy(@PathVariable String id) throws Throwable{
		JsonNode policy = ApiUtils.getPolicy(id);
		JsonNode result = JsonUtils.modifyGroupJson(policy, JsonContract.FIELD_POLICY, mapper);
		return mapper.writeValueAsString(result);
	}

	// pagination should be supported later
	private String getClaim(@PathVariable String id) throws Throwable{
		JsonNode claim = ApiUtils.getClaim(id);
		JsonNode result = JsonUtils.modifyGroupJson(claim, JsonContract.FIELD_CLAIM, mapper);
		return mapper.writeValueAsString(result);
	}

	private String getCustomer(@PathVariable String id) throws Throwable{
		JsonNode user = ApiUtils.getUserById(id);
		JsonNode result = JsonUtils.modifyCustomersJson(user, mapper);
		return mapper.writeValueAsString(result);
	}
}

