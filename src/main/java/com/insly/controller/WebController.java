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
import com.insly.JsonUtil;

import freemarker.template.Template;


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
    	Map<String, Object> policyValues = mapper.convertValue(root, Map.class);    	
    	
//    	Map<String, Object> policy = new HashMap<String,Object>();
//    	policy.put("customer_name", "Kiehn, Antonette");
//    	policy.put("customer_number", "cus-number123");
//    	policy.put("coverage", "vehicle insurance");
//    	policy.put("object", "vehicle");
//    	policy.put("type", "regular policy");
//    	policy.put("insurer", "Journey");
//    	policy.put("number", "po.12345678");
//    	policy.put("start_date", "01/01/2016");
//    	policy.put("end_date", "01/12/2016");
//    	policy.put("status", "valid");
//    	policy.put("gross_premium", "123.00");
//    	policy.put("installment", "1");
//    	policy.put("collection", "insurer collects");
//    	policy.put("net_premium", "123.00");
//    	
    	
    	Map<String, Object> motor = new HashMap<String, Object>();
//    	motor.put("coverage", "full coverage");
//    	motor.put("tp_property", "5000000.00");
//    	motor.put("tp_health", "25000000.00");
//    	motor.put("tp_deductible", "5000000.00");
//    	motor.put("own_property", "50000.00");
//    	motor.put("own_health", "25000.00");
//    	motor.put("own_deductible", "5000.00");
//    	motor.put("new_value_coverage", "yes");
//    	motor.put("courtesy", "yes");
//    	motor.put("commission", "10%");
    	
    	ModelAndView mav = new ModelAndView("policy_detail");
    	
    	mav.addObject("policy", policyValues);
    	mav.addObject("sales_type","renewal");
    	mav.addObject("previous_policy","po.123578");
    	mav.addObject("created_from_quote","qo.12345");
    	mav.addObject("renewal","not renewed");
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
    	Map<String, Object> claimValues = mapper.convertValue(root, Map.class);
    	
//    	claim.put("id", "10107600");
//    	claim.put("customer", "Kiehn, Antonette");
//    	claim.put("status", "Claim reopened");
//    	claim.put("incident_loss_date", "09/01/2014 12:00");
//    	claim.put("date_submitted", "10/01/2014");
//    	claim.put("settlement_date", "11/01/2014");
//    	claim.put("location_of_incident", "5651 Distribution Way Englewood, CO 80110");
//    	claim.put("loss_description", "Head on collision");
//    	claim.put("injury_description", "Internal bruising");
//    	claim.put("incident_circumstances", "Blinding sun");
//    	claim.put("info", "none");
//    	claim.put("loss_amount", "10000");
//    	claim.put("deducible", "2526");
    	
    	Map<String, Object> policy = new HashMap<String,Object>();
//    	policy.put("number", "R4789123235");
//    	policy.put("insurer", "Continental Casualty Company");
//    	policy.put("product", "Vehicle Insurance");
//    	policy.put("start_date", "07/17/2014");
//    	policy.put("end_date", "10/16/2014");
    	
    	Map<String, Object> insurer = new HashMap<String,Object>();
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
    	mav.addObject("claim", claimValues);
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

