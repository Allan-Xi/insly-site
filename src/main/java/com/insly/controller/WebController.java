package com.insly.controller;

import java.io.File;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    	String userString = ApiController.getCustomer(id);
    	JsonNode root = mapper.readTree(userString).path("users");
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
    	String policyString = ApiController.getPolicy(id);
    	JsonNode root = mapper.readTree(policyString).path("policy");
    	Map<String, Object> policy = mapper.convertValue(root, Map.class);    	

		// vehicle api is not ready
		// String vehicleUrl = (String) policyValues.get("vehicle");
		// String vehicleString = getObjectByRelativePath(vehicleUrl);
		// Map<String, Object> vehicle = mapper.convertValue(mapper.readTree(vehicleString).get("users"), Map.class);
		Map<String, Object> vehicle = new HashMap<String, Object>();
		
		String insuredUrl = (String) policy.get("insured");
		Map<String, Object> insured = mapper.convertValue(getObjectByRelativePath(insuredUrl).get("users"), Map.class);
		insured.put("name", insured.get("first_name") + " " + insured.get("middle_initial")+ " " + insured.get("last_name"));
		
		Map<String, Object> motor = new HashMap<String,Object>();
    	
    	ModelAndView mav = new ModelAndView("policy_detail");
    	
    	mav.addObject("policy", policy);
    	mav.addObject("sales_type","renewal");
    	mav.addObject("previous_policy","po.123578");
    	mav.addObject("created_from_quote","qo.12345");
    	mav.addObject("renewal","not renewed");
    	mav.addObject("vehicle", vehicle);
		mav.addObject("insured", insured);
		mav.addObject("motor", motor);
    	return mav;
    }
    
    @RequestMapping("claims")
    public String claims(){
    	return "claims";
    }
    
    @RequestMapping("claim-detail/{id}")
    public ModelAndView claimDetail(@PathVariable String id) throws Throwable{
    	String claimString = ApiController.getClaim(id);
    	JsonNode root = mapper.readTree(claimString).get("claim");
    	Map<String, Object> claim = mapper.convertValue(root, Map.class);
		
    	String policyUrl = (String) claim.get("policy");
    	Map<String, Object> policy = mapper.convertValue(getObjectByRelativePath(policyUrl).get("policy"), Map.class);
    	
//    	policy.put("number", "R4789123235");
//    	policy.put("insurer", "Continental Casualty Company");
//    	policy.put("product", "Vehicle Insurance");
//    	policy.put("start_date", "07/17/2014");
//    	policy.put("end_date", "10/16/2014");

		String insurerUrl = (String) claim.get("driver");
    	Map<String, Object> insurer = mapper.convertValue(getObjectByRelativePath(insurerUrl).get("users"), Map.class);
		insurer.put("contact_name", insurer.get("first_name") + " " + insurer.get("middle_initial")+ " " + insurer.get("last_name"));
//    	insurer.put("contact_name", "CNA");
//    	insurer.put("email", "test@journey.com");
//    	insurer.put("phone", "414-14-14361");
		
		
    	Map<String, Object> claimant = new HashMap<String,Object>();
//    	claimant.put("type", "General claimant info");
//    	claimant.put("name", "Kwikprint");
//    	claimant.put("address", "nowhere");
//    	claimant.put("email", "hailhydra@journey.com");
//    	claimant.put("telephone", "1516614163");
    	
    	
    	ModelAndView mav = new ModelAndView("claim_detail");
    	mav.addObject("claim", claim);
    	mav.addObject("policy", policy);
    	mav.addObject("insurer", insurer);
    	mav.addObject("claimant", claimant);
    	
    	return mav;
    }
    
    @RequestMapping("quotes")
    public String quotes(){
    	return "quotes";
    }
    
}

