package com.insly;

import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
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
		JsonNode users = JsonUtils.modifyCustomerJson(getObjectByPath("users"), mapper);
		return users;
	}
	
	static public JsonNode getUser(String id) throws Throwable{
		JsonNode user = JsonUtils.modifyCustomerJson(getObjectByPathAndId("users", id, "users"), mapper);
		return user;
	}
	static public JsonNode getPolicyList() throws Throwable{
		JsonNode policies = JsonUtils.wrapObjectWithStatus(getObjectByPath("policies"), "policies", mapper);
		return policies;
	}
	
	static public JsonNode getPolicy(String id) throws Throwable{
		JsonNode policy = JsonUtils.wrapObjectWithStatus(
				getObjectByPathAndId("policies", id, "policy"), 
				"policy", mapper);
		return policy;
	}
	
	static public JsonNode getQuoteList() throws Throwable{
		JsonNode policies = JsonUtils.wrapObjectWithStatus(getObjectByPath("quotes"), "quotes", mapper);
		return policies;
	}
	
	static public JsonNode getQuote(String id) throws Throwable{
		JsonNode quote = JsonUtils.wrapObjectWithStatus(
				getObjectByPathAndId("quotes", id, "quote"), 
				"quote", mapper);
		return quote;
	}
	
	static public JsonNode getClaimList() throws Throwable{
		JsonNode claims = JsonUtils.wrapObjectWithStatus(getObjectByPath("claims"), "claims", mapper);
		return claims;
	}
	
	static public JsonNode getClaim(String id) throws Throwable{
		JsonNode claim = JsonUtils.wrapObjectWithStatus(
				getObjectByPathAndId("claims", id, "claim"), 
				"claim", mapper);
		return claim;
	}
	
	static public JsonNode getObjectByPath(String path) throws Throwable{
		initHttpsClient();
		HttpGet httpget = new HttpGet(baseUrl + "/" + path);
		CloseableHttpResponse response = client.execute(httpget);
		String json = EntityUtils.toString(response.getEntity());
		JsonNode dataList = mapper.readTree(json).path(path);
		response.close();
		return dataList; 
	}
	
	static public JsonNode getObjectByPathAndId(String path, String id, String dataFieldName) throws Throwable{
		initHttpsClient();
		HttpGet httpget = new HttpGet(baseUrl + "/" + path + "/" + id);
		CloseableHttpResponse response = client.execute(httpget);
		String json = EntityUtils.toString(response.getEntity());
		JsonNode object = mapper.readTree(json).path(dataFieldName); 
		response.close();
		return object; 
	}

	static public String getObjectByRelativePath(String path) throws Throwable{
		initHttpsClient();
		HttpGet httpget = new HttpGet(baseUrl + path);
		CloseableHttpResponse response = client.execute(httpget);
		String json = EntityUtils.toString(response.getEntity());
		JsonNode object = mapper.readTree(json);
		response.close();
		return mapper.writeValueAsString(object);
	}
}
