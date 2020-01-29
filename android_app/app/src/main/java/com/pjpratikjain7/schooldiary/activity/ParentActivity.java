package com.pjpratikjain7.schooldiary.activity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.util.Log;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.fragments.parentFragments.ParentProfileFragment;
import com.pjpratikjain7.schooldiary.fragments.parentFragments.RemarkFragment;
import com.pjpratikjain7.schooldiary.fragments.parentFragments.WardInformationFragment;
import com.pjpratikjain7.schooldiary.model.Parent;
import com.pjpratikjain7.schooldiary.model.User;
import com.pjpratikjain7.schooldiary.utils.Constants;
import com.pjpratikjain7.schooldiary.utils.Utils;

public class ParentActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener, RemarkFragment.OnFragmentInteractionListener,
        ParentProfileFragment.OnFragmentInteractionListener,
        WardInformationFragment.OnFragmentInteractionListener
{

    TextView email, name;
    SharedPreferences preferences;
    String Username, Email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_parent);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);


        preferences = PreferenceManager.getDefaultSharedPreferences(this);
        Username = preferences.getString("username", "");
        Email = preferences.getString("email", "");

        Log.e("StudentActivity", Email + "  " + Username);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        View hView = navigationView.getHeaderView(0);

        name = hView.findViewById(R.id.textParentNavName);
        name.setText(Username);
        email = hView.findViewById(R.id.textParentNavEmail);
        email.setText(Email);

            preferences = PreferenceManager.getDefaultSharedPreferences(this);
        String Username = preferences.getString("username", "");
        String Email = preferences.getString("email", "");
        Log.e("Remark",Email);



        //Requesting the Express for parent details
        JsonObject body = new JsonObject();
        body.addProperty("email", Email);


        String url = Utils.createRoute(Constants.ROUTE_PARENT + "/byemail");

        Ion.with(this)
                .load("POST", url)
                .setJsonObjectBody(body)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>()
                {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {


                        Log.e("LoginActivity", result.toString());
                        String status = result.get("status").getAsString();
                        if (status.equals("success")) {
                            //Get User Data
                            JsonObject object = result.get("data").getAsJsonObject();

                            //User Table Fields
                            Parent parent = new Parent();
                            parent.setPid(object.get("PID").getAsInt());
                            parent.setSid(object.get("S_ID").getAsInt());
                            parent.setEmail(object.get("PEMAIL").getAsString());
                            parent.setMobile(object.get("PMOBILE").getAsInt());


                            preferences.edit()
                                    .putInt("pid", parent.getPid())
                                    .putInt("sid", parent.getSid())
                                    .commit();
                            Toast.makeText(ParentActivity.this, parent.getPid() + " "+ parent.getEmail() , Toast.LENGTH_SHORT).show();
//                            Toast.makeText(ParentActivity.this, , Toast.LENGTH_SHORT).show();
                        }
                    }
                });
    }


    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.parent, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }


    private  void loadFragment(Fragment fragment)
    {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fm.beginTransaction();
        fragmentTransaction.replace(R.id.framelayout, fragment);
        fragmentTransaction.commit();
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_parentProfile) {
                loadFragment(new ParentProfileFragment());
        } else if (id == R.id.nav_ward) {
                loadFragment(new WardInformationFragment());
        } else if (id == R.id.nav_remark) {
                loadFragment(new RemarkFragment());
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    public void onLogout(MenuItem item) {
        preferences.edit().clear().commit();
        startActivity(new Intent(this, MainActivity.class));
    }

    @Override
    public void onFragmentInteraction(Uri uri) {

    }
}
