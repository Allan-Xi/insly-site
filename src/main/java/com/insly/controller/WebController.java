package com.insly.controller;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import freemarker.template.Configuration;
import freemarker.template.Template;


@Controller
@RequestMapping("/")
public class WebController {
	
    @RequestMapping("")
    public String index() {
        return "customers";
    }

    @RequestMapping("customers")
    public String customers() {
        return "customers";
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
    	
    	ModelAndView mav = new ModelAndView("/policy_detail");
    	
    	mav.addObject("policy", policy);
    	
    	return mav;
    }
}

