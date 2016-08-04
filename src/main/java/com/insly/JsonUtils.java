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
	
	
	// given node is single user object.
	static private JsonNode parseCustomerJson(JsonNode user, ObjectMapper mapper) throws Throwable{
		user = parseObjectBasicAttr(user, mapper);
		// parse name
		String firstName = user.path("first_name").isNull() ? "" : user.get("first_name").asText();
		String middleInitial = user.path("middle_initial").isNull() ? " " : user.get("middle_initial").asText();
		String lastName = user.path("last_name").isNull() ? "" : user.get("last_name").asText();
		
		if("".equals(firstName)&&"".equals(middleInitial)&&"".equals(lastName)){
			return user;
		} else{
			ObjectNode modifiedUser = mapper.convertValue(user, ObjectNode.class);
			modifiedUser.put("name", firstName + " " + middleInitial + " " + lastName);
			return modifiedUser; 
		}
	}
	
	// 
	static public JsonNode modifyCustomersJson(JsonNode users, ObjectMapper mapper) throws Throwable{
   	    ObjectNode result = mapper.convertValue(users, ObjectNode.class);
   	    JsonNode objects = result.path(JsonContract.FIELD_USERS);
   	    JsonNode object = result.path(JsonContract.FIELD_USER);
   	    
		if(!objects.isMissingNode()){
   	    	ArrayNode modifiedObjects = mapper.createArrayNode();
   	    	for(JsonNode item : objects){
   	    		modifiedObjects.add(parseCustomerJson(item, mapper));
   	   		}
   	    	result.set(JsonContract.FIELD_USERS, modifiedObjects);
   	    }
		
		if(!object.isMissingNode()) {
   	    	result.set(JsonContract.FIELD_USER, parseCustomerJson(object, mapper));
   	    }
   	    return result;
	}
	
	static public JsonNode modifyGroupJson(JsonNode group, String dataField, ObjectMapper mapper) throws Throwable{
   	    ObjectNode result = mapper.convertValue(group, ObjectNode.class);
   	    JsonNode objects = result.path(dataField);
   	    
		if(!objects.isMissingNode() && objects.isArray()){
   	    	ArrayNode modifiedObjects = mapper.createArrayNode();
   	    	for(JsonNode item : objects){
   	    		modifiedObjects.add(parseObjectBasicAttr(item, mapper));
   	   		}
   	    	result.set(dataField, modifiedObjects);
   	    } else if(!objects.isMissingNode()) {
   	    	result.set(dataField, parseObjectBasicAttr(objects, mapper));
   	    }
   	    return result;
	}
	
	// add other basic attr parse here.
	static private JsonNode parseObjectBasicAttr(JsonNode object, ObjectMapper mapper) throws Throwable{
		return parseUnixSecs(object, mapper);
	}
	
	// change unix time stamp format. given object is a single object.
	static public JsonNode parseUnixSecs(JsonNode object, ObjectMapper mapper) throws Throwable{
	    ObjectNode modifiedObject = mapper.convertValue(object, ObjectNode.class);
	    Iterator<Entry<String, JsonNode>> attrs = object.fields();

	    // do not change attr in the loop.
	    while (attrs.hasNext()){
	    	Entry<String, JsonNode> attr = attrs.next();
	    	if(attr.getKey().indexOf(unixLabel) != -1){
	    		long unixSeconds = attr.getValue().asLong();
	    		
	    		Date date = new Date(unixSeconds*1000L); // *1000 is to convert seconds to milliseconds
	        	SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy"); // the format of your date
	        	String formattedDate = sdf.format(date);

	        	String newFieldName = attr.getKey();
	        	newFieldName.replace(unixLabel, dateLabel);
	        	modifiedObject.put(newFieldName, formattedDate);

	    	}
	    }
	    return modifiedObject;
	}
	
	private abstract class ItemParser{
		// should use this abstract class to substitute parseObjectAttr. 
		// TODO:  add a new ItemParse parameter to modifyGroupJson function. and invoke it inside the function.
		public abstract JsonNode parse(JsonNode item, ObjectMapper mapper);
	}
}
