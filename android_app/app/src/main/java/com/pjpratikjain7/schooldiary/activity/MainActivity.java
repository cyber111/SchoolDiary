package com.pjpratikjain7.schooldiary.activity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.koushikdutta.async.Util;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.model.User;
import com.pjpratikjain7.schooldiary.utils.Constants;
import com.pjpratikjain7.schooldiary.utils.Utils;

import java.net.URL;

public class MainActivity extends AppCompatActivity {


    EditText editUsername, editPassword;
    SharedPreferences preferences;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        preferences  = PreferenceManager.getDefaultSharedPreferences(this);
        setContentView(R.layout.activity_main);

        editUsername = findViewById(R.id.editUsername);

        editPassword = findViewById(R.id.editPassword);
    }


    public void onLogin(View view)
    {

        Log.e("MainActicity", "Login Called");

        String url = Utils.createRoute(Constants.ROUTE_USER + "/login");

        System.out.println("Url : " + url);
        String username = editUsername.getText().toString();
        String password = editPassword.getText().toString();

        JsonObject body = new JsonObject();

        body.addProperty("password", password);
        body.addProperty("username", username);



        Ion.with(this)
            .load("POST", url)
                .setJsonObjectBody(body)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>()
                {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {


                        Log.e("LoginActivity",result.toString());
                        String status = result.get("status").getAsString();
                        if(status.equals("success"))
                        {
                            //Get User Data
                            JsonObject object = result.get("data").getAsJsonObject();

                            //User Table Fields
                                String email = object.get("email").getAsString();
                                int uid  = object.get("id").getAsInt();
                                String username = object.get("username").getAsString();
                                int is_block = object.get("is_block").getAsInt();
                                String role = object.get("role").getAsString();

                                User user = new User(uid, email, username,"123",is_block,role);


                            preferences.edit()
                                    .putInt("uid", user.getUid())
                                    .putString("username", user.getUsername())
                                    .putString("email", user.getEmail())
                                    .putString("role", user.getRole())
                                    .putBoolean("login_status", true)
                                    .commit();

                            Toast.makeText(MainActivity.this, "Welcome  :" + user.getRole(), Toast.LENGTH_SHORT).show();
                            Log.e("MainActivity", user.toString());
                            //Check Role And Navigate according to the role
                            String userRole = user.getRole();


                            //Student
                            if(userRole.equals("student"))
                            {

                                Intent intent = new Intent(MainActivity.this, StudentActivity.class);
                                startActivity(intent);
                            }

                            //Parent
                            if(userRole.equals("parent"))
                            {
                                Intent intent = new Intent(MainActivity.this, ParentActivity.class);
                                startActivity(intent);
                            }

                            //Teacher
                            if(userRole.equals("faculty"))
                            {
                                Intent intent = new Intent(MainActivity.this, TeacherActivity.class);
                                startActivity(intent);
                            }

                        }
                        else {
                            Log.e("MainActivity", result.get("error").getAsJsonObject().toString());

                        }
                    }
                });

    }

    public void onRegister(View view) {
    }
}
