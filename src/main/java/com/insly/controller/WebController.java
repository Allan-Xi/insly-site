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

    @RequestMapping("customer/addquick")
    public String quickAddCustomer() {
        return "addquick";
    }
    
    @RequestMapping("policies")
    public String policies(){
    	return "policies";
    }
    
    @RequestMapping("policy-detail/{number}")
    public ModelAndView policyDetail(@PathVariable String number) throws Exception{
    	
    	Map<String, Object> policy = new HashMap<String,Object>();
    	policy.put("customer", "Piano");
    	policy.put("coverage", 123);
    	policy.put("object", "obj");
    	
    	ModelAndView mav = new ModelAndView("policy_detail");
    	
    	mav.addObject("policy", policy);
    	
    	return mav;
    }
    
    
    @RequestMapping("customer-detail/{number}")
    public ModelAndView customerDetail(@PathVariable String number) throws Exception{
    	
    	Map<String, Object> customer = new HashMap<String,Object>();
    	
    	ModelAndView mav = new ModelAndView("customer_detail");
    	mav.addObject("customer", customer);
    	
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

