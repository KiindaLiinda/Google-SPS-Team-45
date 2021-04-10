/*package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/myservlet")
public class MyServlet extends HttpServlet {

  ArrayList<String> favorites = new ArrayList<String>();
    favorites.add("Turqioise");
    favorites.add("Watermelon");
    favorites.add("Slipknot");

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Gson gson = new Gson();
    String convertedList = gson.toJson(favorites);
    
  }
} */