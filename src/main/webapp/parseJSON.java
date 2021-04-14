import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;


//HOW TO INSTALL JAR FOR JSON PARSING: https://www.geeksforgeeks.org/parse-json-java/

public class parseJSON
{

    public final static Logger log = Logger.getLogger("parseJSON");

    private static parseJSON instance = null;

    private JSONParser jsonParser;

    public parseJSON()
    {
        jsonParser = new JSONParser();
    }

    public static parseJSON getInstance()
    {
        if (instance == null) {
            instance = new parseJSON();
        }
        return instance;
    }


    private String getRequest(String url) throws Exception {

        final URL obj = new URL(url);
        final HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("GET");

        if (con.getResponseCode() != 200) {
            return null;
        }

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        return response.toString();
    }



    public Map<String, Double> getCoordinates(String address) throws Exception {
        Map<String, Double> result;

        StringBuffer query;
        String[] split = address.split(" ");
        String queryResult = null;

        query = new StringBuffer();
        result = new HashMap<String, Double>();

        query.append("http://nominatim.openstreetmap.org/search?q=");

        if(split.length == 0)
        {
            return null;
        }

        for (int i = 0; i < split.length; i++) {
            query.append(split[i]);
            if (i < (split.length - 1)) {
                query.append("+");
            }
        }
        query.append("&format=json&addressdetails=1");

        //log.debug("Query:" + query);

        /*
        try {
            queryResult = getRequest(query.toString());
        } catch (Exception e) {
            log.error("Error when trying to get data with the following query " + query);
        }

         */

        queryResult = getRequest(query.toString());



        Object obj = JSONValue.parse(queryResult);
        //log.debug("obj=" + obj);

        if (obj instanceof JSONArray) {
            JSONArray array = (JSONArray) obj;
            if (array.length() > 0) {
                JSONObject jsonObject = (JSONObject) array.get(0);

                String lon = (String) jsonObject.get("lon");
                String lat = (String) jsonObject.get("lat");

                result.put("lon", Double.parseDouble(lon));
                result.put("lat", Double.parseDouble(lat));

            }
        }

        return result;

    }



    private static void parseFile(String jsonFile) throws Exception {
        JSONObject jsonObject = new JSONObject(jsonFile);


        //JSONObject jo = new JSONObject();

        JSONArray jsonArray = jsonObject.getJSONArray("California");

        for(int i = 0; i < jsonArray.length(); i++)
        {
            String place_name = jsonArray.getJSONObject(i).getString("Address");
            System.out.println("Address: " + place_name);

            Map<String, Double> coordinates;
            coordinates = parseJSON.getInstance().getCoordinates(place_name);

            System.out.println("Lat: " + coordinates.get("lat") + ", Long: " + coordinates.get("lon"));
        }
    }


    public static void main(String[] args) throws Exception
    {
        String jsonString = new String(Files.readAllBytes(Paths.get("src/main/java/resources.json")));

        parseFile(jsonString);

    }


}

