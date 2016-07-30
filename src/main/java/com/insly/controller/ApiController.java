package com.insly.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * This api controller suits the data format of bootstrap-table ajax
 */

@RestController
@RequestMapping("/api")
public class ApiController {

/*    @RequestMapping("users")
    // pagination should be supported later
    public String listCustomers() {
        return "{\n" +
                "    \"total\": 14,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "            \"name\": \"TipiakInc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"annmarie_castros@gmail.com\",\n" +
                "            \"phone\": \"phone:936-751-7961\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"20 20 Printing Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"merilyn_bayless@cox.net\",\n" +
                "            \"phone\": \"phone: 408-758-5015\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Able Air Inc\",\n" +
                "            \"birthdate\": \"\",\n" +
                "            \"email\": \"zula_rehmer@yahoo.com\",\n" +
                "            \"phone\": \"phone: 419-533-5170\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"name\": \"Whistler, Lori\",\n" +
                "            \"birthdate\": \"01/06/1980\",\n" +
                "            \"email\": \"lori@whistler.org\",\n" +
                "            \"phone\": \"phone: 763-347-5457\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }*/

    @RequestMapping("users")
    public String listCustomers() {
        String result = "";
        // 1. fetch data from given api
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet("http://localhost:8080/mock/users");
        try {
            CloseableHttpResponse response = httpclient.execute(httpGet);
            HttpEntity entity = response.getEntity();
            String inputJson = EntityUtils.toString(entity);
            // 2. convert api response to bootstrap table rows
            ObjectMapper inputMapper = new ObjectMapper();
            JsonNode inputRoot = inputMapper.readTree(inputJson);
            ObjectMapper outputMapper = new ObjectMapper();
            ObjectNode outputNode = outputMapper.createObjectNode();
            // assume it is array
            JsonNode userNodes = inputRoot.path("users");
            outputNode.put("total", userNodes.size());
            ArrayNode rowsNode = outputMapper.createArrayNode();
            for (JsonNode userNode : userNodes) {
                String name = userNode.path("first_name").asText() + " " + userNode.path("last_name").asText();
                ObjectNode rowNode = outputMapper.createObjectNode();
                rowNode.put("name", name);
                rowNode.put("birthdate", "");
                rowNode.put("email", "");
                rowNode.put("phone", "");
                rowsNode.add(rowNode);
            }
            outputNode.set("rows", rowsNode);
            result = outputMapper.writerWithDefaultPrettyPrinter().writeValueAsString(outputNode);
        } catch (IOException e) {
            e.printStackTrace();
            return result;
        }
        return result;
    }


    @RequestMapping("policies")
    public String listPolicies() {
        return "{\n" +
                "    \"total\": 12,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132661\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132662\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132663\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132664\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132665\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132666\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132667\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132668\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132669\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132670\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132671\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        },\n" +
                "        {\n" +
                "            \"policy_number\": \"A384132672\",\n" +
                "            \"insurer\": \"Mercury Insurance Group\",\n" +
                "            \"inception_date\": \"3/20/14\",\n" +
                "            \"expiry_date\": \"9/20/14\",\n" +
                "       	 \"customer_full_name\": \"Schlossberg, Carolann\",\n" +
                "            \"status\": \"ON_RISK\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";

    }

    @RequestMapping("customers/{number}/policies")
    public String customerPolicies(@PathVariable String number) {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"policy_number\":	\"AAAAAAAAAAA\",\n" +
                "			\"insurer\":	\"Journey Ltd\",\n" +
                "			\"validity\":	\"valid\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("customers/{number}/vehicles")
    public String getCustomerVehicles(@PathVariable String number) {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"vehicle\":	\"Toyata S1\",\n" +
                "			\"type\":	\"whatever\",\n" +
                "			\"status\":	\"valid\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("customers/{number}/quotes")
    public String getCustomerQuotes(@PathVariable String number) {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"quote_number\":	\"1\",\n" +
                "			\"object\":	\"vehicle\",\n" +
                "			\"status\":	\"valid\",\n" +
                "			\"broker\":	\"broker\",\n" +
                "			\"date\":	\"01/01/2016\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("customers/{number}/claims")
    public String getCustomerClaims(@PathVariable String number) {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"claim_id\":	\"BBBBBBBAAABB\",\n" +
                "			\"object\":	\"vehicle\",\n" +
                "			\"customer\":	\"Piano\",\n" +
                "			\"status\":	\"valid\",\n" +
                "			\"broker\":	\"broker\",\n" +
                "			\"date\":	\"01/01/2016\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("customers/{number}/crm")
    public String getCustomerCRM(@PathVariable String number) {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"task\":	\"Finish website\",\n" +
                "			\"description\":	\"Finish this website in 2 days!\",\n" +
                "			\"responsible\":	\"Journey\",\n" +
                "			\"status\":	\"valid\",\n" +
                "			\"date\":	\"01/01/2016\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("claims")
    // pagination should be supported later
    public String listClaims() {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"claim_id\":	\"1234567890\"" +
                "        }\n" +
                "    ]\n" +
                "}";
    }

    @RequestMapping("quotes")
    // pagination should be supported later
    public String listQuotes() {
        return "{\n" +
                "    \"total\": 1,\n" +
                "    \"rows\": [\n" +
                "        {\n" +
                "			\"quote_number\":	\"quo.123456\"," +
                "			\"customer\":	\"Someone\",\n" +
                "			\"object\":	\"Vehicle\"\n" +
                "        }\n" +
                "    ]\n" +
                "}";
    }
}

