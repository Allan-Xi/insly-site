package com.insly;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonUtil {
	
	static private ObjectNode parseCustomerName(JsonNode user, ObjectMapper mapper) throws Throwable{
		
		String firstName = user.get("first_name")==null ? "" : user.get("first_name").asText();
		String middleInitial = user.get("middle_initial")==null ? "" : user.get("middle_initial").asText();
		String lastName = user.get("last_name")==null ? "" : user.get("last_name").asText();
		
		ObjectNode modifiedUser = mapper.convertValue(user, ObjectNode.class);
		modifiedUser.put("name", firstName + middleInitial + lastName);
		
		return modifiedUser; 
	}
	
	static public String customersToString(String usersJson, ObjectMapper mapper) throws Throwable{
		String result = "null";
		JsonNode rootNode = mapper.readTree(usersJson);
   	   	JsonNode users = rootNode.get("users");
   	       
   	   	ObjectNode modifiedResult = mapper.createObjectNode();
   	   	
   	    if(users.isArray()){
   	    	ArrayNode modifiedUsers = mapper.createArrayNode();
   	    	for(JsonNode item : users){
   	   			modifiedUsers.add(parseCustomerName(item, mapper));
   	   		}
   	    	modifiedResult.set("users", modifiedUsers);
   	    }
   	    else{
   	    	modifiedResult.set("users", parseCustomerName(users, mapper));
   	    }
   	   	modifiedResult.put("status", 200);
   	   	result = mapper.writeValueAsString(modifiedResult);
		return result;
	}
	
}
