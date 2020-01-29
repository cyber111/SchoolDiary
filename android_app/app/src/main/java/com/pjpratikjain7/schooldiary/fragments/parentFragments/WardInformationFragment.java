package com.pjpratikjain7.schooldiary.fragments.parentFragments;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.utils.Constants;
import com.pjpratikjain7.schooldiary.utils.Utils;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link WardInformationFragment.OnFragmentInteractionListener} interface
 * to handle interaction events.
 * Use the {@link WardInformationFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class WardInformationFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private OnFragmentInteractionListener mListener;

    public WardInformationFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment WardInformationFragment.
     */
    // TODO: Rename and change types and number of parameters
    View view;
    SharedPreferences preferences;
    EditText etWardName, etWardEmails, etWardClass, etId, etRollNo;
    public static WardInformationFragment newInstance(String param1, String param2) {
        WardInformationFragment fragment = new WardInformationFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        preferences = PreferenceManager.getDefaultSharedPreferences(getContext());
        int id = preferences.getInt("sid",0);
        view = inflater.inflate(R.layout.fragment_ward_information, container, false);

        etWardName =view.findViewById(R.id.parentWardNameTextView);
        etId = view.findViewById(R.id.parentWardIdTextView);
        etWardEmails = view.findViewById(R.id.parentWardEmailTextView);
        etRollNo = view.findViewById(R.id.parentWardRollNoTextView);
        etWardClass = view.findViewById(R.id.parentWardClassTextView);

        //Requesting the Express for Student details

        JsonObject body = new JsonObject();

        System.out.println(id);
        body.addProperty("id", id);


        String url = Utils.createRoute(Constants.ROUTE_STUDENT+ "/bysid");
        System.out.println(url);
        Ion.with(this)
                .load("POST", url)
                .setJsonObjectBody(body)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>()
                {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {


                        Log.e("ParentWardF..", result.toString());
                        String status = result.get("status").getAsString();
                        if (status.equals("success")) {
                            //Get User Data
                            JsonObject object = result.get("data").getAsJsonObject();

                            //User Table Fields
                            Log.e("ParentWard", result.toString());

                            etWardName.setText(object.get("SFNAME").getAsString() + object.get("SLNAME").getAsString());
                            etWardEmails.setText(object.get("SEMAIL").getAsString());
                            etRollNo.setText(object.get("SROLLNO").getAsString());
                            etId.setText(object.get("S_ID").getAsString());
                            etWardClass.setText(object.get("SCLASS").getAsString());



                        }
                        else
                        {
                              Log.e("ParentWardF..", e.toString());
                        }
                    }
                });





        return view;

    }

    // TODO: Rename method, update argument and hook method into UI event
    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
            mListener.onFragmentInteraction(uri);
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnFragmentInteractionListener) {
            mListener = (OnFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        void onFragmentInteraction(Uri uri);
    }
}
