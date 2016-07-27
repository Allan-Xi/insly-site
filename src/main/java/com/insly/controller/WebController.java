package com.insly.controller;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import freemarker.template.Template;


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
    
    @RequestMapping("customer-detail/{number}")
    public ModelAndView customerDetail(@PathVariable String number) throws Exception{
    	
    	Map<String, Object> customer = new HashMap<String,Object>();
    	customer.put("type", "individual");
    	customer.put("name", "Altes, Johnny");
    	customer.put("birthdate", "08/01/1974");
    	customer.put("email", "johnny@journey.com");
    	customer.put("phone", "1234567890");
    	customer.put("mobile", "0987654321");
    	customer.put("preferred_channel", "e-mail");
    	customer.put("sales_channel", "Agent sales");
    	customer.put("account_manager", "Ignalls, Donald R Esq");
    	customer.put("language", "english");
    	
    	ModelAndView mav = new ModelAndView("customer_detail");
    	mav.addObject("customer", customer);
    	
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
    
    @RequestMapping("policy-detail/{number}")
    public ModelAndView policyDetail(@PathVariable String number) throws Exception{
    	
    	Map<String, Object> policy = new HashMap<String,Object>();
    	policy.put("customer_name", "Kiehn, Antonette");
    	policy.put("customer_number", "cus-number123");
    	policy.put("coverage", "vehicle insurance");
    	policy.put("object", "vehicle");
    	policy.put("type", "regular policy");
    	policy.put("insurer", "Journey");
    	policy.put("number", "po.12345678");
    	policy.put("start_date", "01/01/2016");
    	policy.put("end_date", "01/12/2016");
    	policy.put("status", "valid");
    	policy.put("gross_premium", "123.00");
    	policy.put("installment", "1");
    	policy.put("collection", "insurer collects");
    	policy.put("net_premium", "123.00");
    	
    	
    	Map<String, Object> motor = new HashMap<String, Object>();
    	motor.put("coverage", "full coverage");
    	motor.put("tp_property", "5000000.00");
    	motor.put("tp_health", "25000000.00");
    	motor.put("tp_deductible", "5000000.00");
    	motor.put("own_property", "50000.00");
    	motor.put("own_health", "25000.00");
    	motor.put("own_deductible", "5000.00");
    	motor.put("new_value_coverage", "yes");
    	motor.put("courtesy", "yes");
    	motor.put("commission", "10%");
    	
    	ModelAndView mav = new ModelAndView("policy_detail");
    	
    	mav.addObject("policy", policy);
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
    
    @RequestMapping("claim-detail/{number}")
    public ModelAndView claimDetail(@PathVariable String number){
    	Map<String, Object> claim = new HashMap<String,Object>();
    	Map<String, Object> policy = new HashMap<String,Object>();
    	Map<String, Object> insurer = new HashMap<String,Object>();
    	Map<String, Object> claimant = new HashMap<String,Object>();
    	
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

