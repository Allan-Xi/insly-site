package com.insly;

import java.net.URI;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
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

public class ApiUtils {
	
	static private CloseableHttpClient client = null;
	static private ObjectMapper mapper = new ObjectMapper();
//	static private String baseUrl = "https://jprod.wonderdev.com/policyadmin/v1";
	static private String baseUrl = "https://localhost:3000";
	
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
//		JsonNode users = JsonUtils.modifyCustomerJson(getObjectByPath("users"), mapper);
		JsonNode users = getObjectByPath("users");
		return users;
	}
	
	static public JsonNode getUserById(String id) throws Throwable{
//		JsonNode user = JsonUtils.modifyCustomerJson(getObjectByPathAndId("users", id), mapper);
		JsonNode user = getObjectByPathAndId("users", id);
		return user;
	}
	
	static public JsonNode getPolicyList() throws Throwable{
		JsonNode policies = getObjectByPath("policies");
		return policies;
	}
	
	static public JsonNode getPolicy(String id) throws Throwable{
		JsonNode policy = getObjectByPathAndId("policies", id);
		return policy;
	}
	
	static public JsonNode getQuoteList() throws Throwable{
		JsonNode policies = getObjectByPath("quotes");
		return policies;
	}
	
	static public JsonNode getQuote(String id) throws Throwable{
		JsonNode quote = getObjectByPathAndId("quotes", id);
		return quote;
	}
	
	static public JsonNode getClaimList() throws Throwable{
		JsonNode claims = getObjectByPath("claims");
		return claims;
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
		URI uri = new URIBuilder(baseUrl)
			        .setPath("/" + path + "/" + id)
			        .setQuery(queryString)
			        .build();

		String json = getResponse(uri.toString());
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
	
//	static public String getIdFromRelativePath(String path){
//		URI uri = new URI(path);
//		
//		return "";
//	}
}

