package com.pjpratikjain7.schooldiary.activity;


import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;


import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.fragments.studentFragments.StudentProfileFragment;
import com.pjpratikjain7.schooldiary.fragments.studentFragments.StudentTestFragment;

public class StudentActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener,
        StudentProfileFragment.OnFragmentInteractionListener,
        StudentTestFragment.OnFragmentInteractionListener

 {

    SharedPreferences preferences;
    String Username, Email;
    TextView name, email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_student);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);



//        SharedPreferences preferences = getApplicationContext().getSharedPreferences("preference", MODE_WORLD_READABLE);
            preferences = PreferenceManager.getDefaultSharedPreferences(this);
         Username = preferences.getString("username", "");
         Email = preferences.getString("email", "");

        Log.e("StudentActivity", Email + "  " + Username);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();
//        email = new TextView(this);
//        email.setText(Email);
//        name = new TextView(this);
//        name.setText(Username);

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        View hView = navigationView.getHeaderView(0);
        name = hView.findViewById(R.id.textProfileName);
        name.setText(Username);
        email = hView.findViewById(R.id.textEmail);
        email.setText(Email);





    }

    private  void loadFragment(Fragment fragment)
    {
        FragmentManager fm = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fm.beginTransaction();
        fragmentTransaction.replace(R.id.framelayout, fragment);
        fragmentTransaction.commit();
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
        getMenuInflater().inflate(R.menu.student, menu);
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




    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

       if (id == R.id.nav_profile) {
            loadFragment(new StudentProfileFragment());
        } else if (id == R.id.nav_test) {

           loadFragment(new StudentTestFragment());


        } else if (id == R.id.nav_tools) {

        } else if (id == R.id.nav_website) {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

     @Override
     public void onFragmentInteraction(Uri uri) {

     }

     public void onLogout(MenuItem item) {
        preferences.edit().clear().commit();
        startActivity(new Intent(this, MainActivity.class));

    }
 }
