package com.insly;

import java.net.URI;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.TrustStrategy;
import org.apache.http.util.EntityUtils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ApiUtils {
	
	static private CloseableHttpClient client = null;
	static private ObjectMapper mapper = new ObjectMapper();
	static private String baseUrl = "https://jprod.wonderdev.com/policyadmin/v1";
//	static private String baseUrl = "https://localhost:3000";
	
	static public CloseableHttpClient initHttpsClient(){
		if(client == null){
	        SSLContextBuilder builder = new SSLContextBuilder();
	        try {
	            builder.loadTrustMaterial(null, new TrustStrategy() {
	                @Override
	                public boolean isTrusted(X509Certificate[] x509Certificates, String s) throws CertificateException {
	                    return true;
	                }
	            });
	        } catch (NoSuchAlgorithmException e) {
	            e.printStackTrace();
	        } catch (KeyStoreException e) {
	            e.printStackTrace();
	        }
	        SSLConnectionSocketFactory sslsf = null;
	        try {
	            sslsf = new SSLConnectionSocketFactory(
	                    builder.build(), new NoopHostnameVerifier());

	        } catch (NoSuchAlgorithmException e) {
	            e.printStackTrace();
	        } catch (KeyManagementException e) {
	            e.printStackTrace();
	        }
			
			client = HttpClients.custom().setSSLSocketFactory(sslsf).build();
		}
		return client;
	}

	static public JsonNode getUserList() throws Throwable{
		JsonNode users = getObjectByPath("users");
		return users;
	}
	
	static public JsonNode getUserById(String id) throws Throwable{
		JsonNode user = getObjectByPathAndId("users", id);
		return user;
	}
	
	static public JsonNode getPolicyList() throws Throwable{
		JsonNode policies = getObjectByPath("policies");
		// temp solution. Expand insured here.
		List<String> keys = new ArrayList<String>();
		keys.add(JsonContract.FIELD_INSURED);
		List<String> names = new ArrayList<String>();
		names.add(JsonContract.FIELD_USER);
		JsonNode result = expandFieldsOfGroup(policies, "policies", keys, names);
		
		return result;
	}
	
	static public JsonNode getPolicy(String id) throws Throwable{
		JsonNode policy = getObjectByPathAndId("policies", id);
		return policy;
	}
	
	static public JsonNode getQuoteList() throws Throwable{
		JsonNode quotes = getObjectByPath("quotes");
		List<String> keys = new ArrayList<String>();
//		 vehicles api not ready.
//		keys.add(JsonContract.FIELD_VEHICLE);
		keys.add(JsonContract.FIELD_DRIVER);
		List<String> names = new ArrayList<String>();
//		names.add(JsonContract.FIELD_VEHICLE);
		names.add(JsonContract.FIELD_USER);
		JsonNode result = expandFieldsOfGroup(quotes, "quotes", keys, names);
		
		return result;
	}
	
	static public JsonNode getQuote(String id) throws Throwable{
		JsonNode quote = getObjectByPathAndId("quotes", id);
		return quote;
	}
	
	static public JsonNode getClaimList() throws Throwable{
		JsonNode claims = getObjectByPath("claims");
		
		List<String> keys = new ArrayList<String>();
//		keys.add(JsonContract.FIELD_VEHICLE);
		keys.add(JsonContract.FIELD_POLICY);
		keys.add(JsonContract.FIELD_DRIVER);
		List<String> names = new ArrayList<String>();
//		names.add(JsonContract.FIELD_VEHICLE);
		names.add(JsonContract.FIELD_POLICY);
		names.add(JsonContract.FIELD_USER);
		JsonNode result = expandFieldsOfGroup(claims, "claims", keys, names);
		
		return result;
	}
	
	static public JsonNode getClaim(String id) throws Throwable{
		JsonNode claim = getObjectByPathAndId("claims", id);
		return claim;
	}
	
	static public JsonNode getObjectByPath(String path) throws Throwable{
		String json = getResponse(baseUrl + "/" + path);
		JsonNode dataList = mapper.readTree(json);
		return dataList; 
	}
	
	static public JsonNode getObjectByPathAndId(String path, String id) throws Throwable{
		String json = getResponse(baseUrl + "/" + path + "/" + id);
		JsonNode object = mapper.readTree(json); 
		return object; 
	}

	static public JsonNode getObjectByRelativePath(String path) throws Throwable{
		String json = getResponse(baseUrl + path);
		JsonNode object = mapper.readTree(json);
		return object;
	}
	
	// expand RESTful URL to object.
	static public JsonNode getExpandedObject(String path, String id, List<String> expanededFields) throws Throwable{
		
		String queryString = null;
		if(expanededFields == null){
			queryString = "expand=true";
		} else{
			queryString = "expand=" + String.join(",", expanededFields);
		}

		String json = getResponse(baseUrl + "/" + path + "/" + id + "?" + "expand=1");
		JsonNode object = mapper.readTree(json);

		return object;
	}
	static private String getResponse (String url) throws Throwable{
		initHttpsClient();
		System.out.println(url);
		HttpGet httpget = new HttpGet(url);
		CloseableHttpResponse response = client.execute(httpget);
		// judge status here.
		String json = EntityUtils.toString(response.getEntity());
		response.close();
		return json;
	}
	
	static public final List<String> primaryFieldNames = new ArrayList<String>(){{  
	     add(JsonContract.FIELD_USERS);  
	     add(JsonContract.FIELD_POLICIES);  
	     add(JsonContract.FIELD_QUOTES);
	     add(JsonContract.FIELD_CLAIMS);
	 }};
			
	static public JsonNode expandFieldsOfGroup(JsonNode group, String dataField, List<String> fieldNames, List<String> innerExpandFieldNames) throws Throwable{
		ObjectNode result = mapper.convertValue(group, ObjectNode.class);
		
		JsonNode objects = group.path(dataField);
		// Object is an array. such as users, policies.
		if(!objects.isMissingNode() && objects.isArray() && fieldNames != null){
			ArrayNode expandedObjects = mapper.createArrayNode();
			
			for(JsonNode object : objects){
				ObjectNode expandedObject = mapper.convertValue(object, ObjectNode.class);
				// expand each field in fieldNames
				for(int i = 0; i<fieldNames.size(); i++){
					String key = fieldNames.get(i);
					String innerName = innerExpandFieldNames.get(i);
					
					String url = object.path(key).asText();
					if(url == null || "".equals(url)){	
						continue;
					}
					JsonNode expanededField = getObjectByRelativePath(url);
					if(JsonContract.FIELD_USER.equals(innerName) || JsonContract.FIELD_USERS.equals(innerName)){
						expanededField = JsonUtils.modifyCustomersJson(expanededField, mapper);
					} else{
						expanededField = JsonUtils.modifyGroupJson(expanededField, innerName, mapper);
					}
					expanededField = expanededField.findPath(innerName);
					expandedObject.set(key, expanededField);
				}
				expandedObjects.add(expandedObject);
			}
			result.set(dataField, expandedObjects);
			
		}
		
		//objects is an object. such as user, policy.
		if(!objects.isMissingNode() && !objects.isArray() && fieldNames != null){
			JsonNode object = objects;
			ObjectNode expandedObject = mapper.convertValue(object, ObjectNode.class);
			// expand each field in fieldNames
			for(int i = 0; i<fieldNames.size(); i++){
				String key = fieldNames.get(i);
				String innerName = innerExpandFieldNames.get(i);
				
				String url = object.path(key).asText();
				if(url == null || "".equals(url)){	
					continue;
				}
				JsonNode expanededField = getObjectByRelativePath(url);
				if(JsonContract.FIELD_USER.equals(innerName) || JsonContract.FIELD_USERS.equals(innerName)){
					expanededField = JsonUtils.modifyCustomersJson(expanededField, mapper);
				} else{
					expanededField = JsonUtils.modifyGroupJson(expanededField, innerName, mapper);
				}
				expandedObject.set(key, expanededField);
			}
			result.set(dataField, expandedObject);
		}
		return result;
	}
}

