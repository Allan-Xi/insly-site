package com.insly;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonUtils {
	private static final String unixLabel = "unix_secs";
	private static final String dateLabel = "date";
	
	static private ObjectNode parseCustomerName(JsonNode user, ObjectMapper mapper) throws Throwable{
		
		String firstName = user.get("first_name")==null ? "" : user.get("first_name").asText();
		String middleInitial = user.get("middle_initial")==null ? "" : user.get("middle_initial").asText();
		String lastName = user.get("last_name")==null ? "" : user.get("last_name").asText();
		
		ObjectNode modifiedUser = mapper.convertValue(user, ObjectNode.class);
		modifiedUser.put("name", firstName + middleInitial + lastName);
		
		return modifiedUser; 
	}
	
	static public JsonNode modifyCustomerJson(JsonNode users, ObjectMapper mapper) throws Throwable{
		
   	   	ObjectNode modifiedResult = mapper.createObjectNode();
   	   	
   	    if(users.isArray()){
   	    	ArrayNode modifiedUsers = mapper.createArrayNode();
   	    	for(JsonNode item : users){
   	   			modifiedUsers.add(parseCustomerName(item, mapper));
   	   			//parseUnixSecs(item, mapper);
   	   			
   	   		}
   	    	modifiedResult.set("users", modifiedUsers);
   	    }
   	    else{
   	    	modifiedResult.set("users", parseCustomerName(users, mapper));
   	    }
   	   	modifiedResult.put("status", 200);
		return modifiedResult;
	}
	
	static public JsonNode wrapObjectWithStatus(JsonNode object, String fieldName, ObjectMapper mapper) throws Throwable{
		ObjectNode modifiedResult = mapper.createObjectNode();
		modifiedResult.put("status", 200);
		modifiedResult.set(fieldName, object);
		return modifiedResult;
	}
	
	// change unix time stamp format.
	static private ObjectNode parseUnixSecs(JsonNode object, ObjectMapper mapper) throws Throwable{
	    ObjectNode modifiedObject = mapper.convertValue(object, ObjectNode.class);
	    Iterator<Entry<String, JsonNode>> attrs = object.fields();
	    // why null pointer ????
	    while (attrs.hasNext()){
	    	Entry<String, JsonNode> attr = attrs.next();
	    	if(attr != null && attr.getKey().indexOf(unixLabel) != -1){
	    		long unixSeconds = attr.getValue().asLong();
	    		
	    		Date date = new Date(unixSeconds*1000L); // *1000 is to convert seconds to milliseconds
	        	SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy"); // the format of your date
	        	String formattedDate = sdf.format(date);
	        	
	        	String newFieldName = attr.getKey().replace(unixLabel, dateLabel);
	        	modifiedObject.put(newFieldName, formattedDate);

	        	// debug use
	        	System.out.println(newFieldName);
	        	System.out.println(formattedDate);
	    	}
	    }
	    return modifiedObject;
	}
}
