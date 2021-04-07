import java.io.FileReader;
import java.net.URI;
import java.util.Iterator;
import java.util.Map;

import org.json.*;
import org.json.simple.parser.JSONParser;


//HOW TO INSTALL JAR FOR JSON PARSING: https://www.geeksforgeeks.org/parse-json-java/

public class parseJSON
{

    public static void main(String[] args) throws Exception
    {
        String jsonString = "";

        //URI uri = new URI("src/resources.json");

        //JSONTokener tokener = new JSONTokener(uri.toURL().openStream());
        //JSONObject jsonObject = new JSONObject(tokener);

        JSONObject jsonObject = new JSONObject("/resources.json");


        //JSONObject jo = new JSONObject();

        JSONArray jsonArray = jsonObject.getJSONArray("California");

        for(int i = 0; i < jsonArray.length(); i++)
        {
            String place_name = jsonArray.getJSONObject(i).getString("Address");
            System.out.println(place_name);
        }

        System.out.println(Place);


    }

}

