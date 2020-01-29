package com.pjpratikjain7.schooldiary.utils;

import com.google.gson.JsonObject;

public class ParentUtils
{
    public void getParents(String Email)
    {
        String url = Utils.createRoute(Constants.ROUTE_PARENT + "/byemail");
        JsonObject body = new JsonObject();
        body.addProperty("email", Email);
    }
}
