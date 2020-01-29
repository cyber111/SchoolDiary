package com.pjpratikjain7.schooldiary.fragments.teacherFragment;

import android.content.Context;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.adapter.TeacherStudentAdaptor;
import com.pjpratikjain7.schooldiary.model.Remark;
import com.pjpratikjain7.schooldiary.model.Student;
import com.pjpratikjain7.schooldiary.utils.Constants;
import com.pjpratikjain7.schooldiary.utils.Utils;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link TeacherStudentList.OnFragmentInteractionListener} interface
 * to handle interaction events.
 * Use the {@link TeacherStudentList#newInstance} factory method to
 * create an instance of this fragment.
 */
public class TeacherStudentList extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private OnFragmentInteractionListener mListener;

    public TeacherStudentList() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment TeacherStudentList.
     */
    // TODO: Rename and change types and number of parameters



    SharedPreferences preferences;
    TextView textViewEmail ;
    View view;
    RecyclerView recyclerView;
    ArrayList<Student> students= new ArrayList<>();
    TeacherStudentAdaptor adaptor;


    public static TeacherStudentList newInstance(String param1, String param2) {
        TeacherStudentList fragment = new TeacherStudentList();
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

        view = inflater.inflate(R.layout.fragment_teacher_student_list, container, false);

        recyclerView =view.findViewById(R.id.student_list_recycler_view);
        adaptor = new TeacherStudentAdaptor(getActivity(), students);
        recyclerView.setAdapter(adaptor);
        recyclerView.setLayoutManager(new LinearLayoutManager((getActivity())));


        return  view;
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
    public void onResume() {
        super.onResume();
        getStudents();
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


    private void getStudents()
    {
        students.clear();
        String url = Utils.createRoute(Constants.ROUTE_STUDENT);
        Ion.with(this.getContext())
                .load("GET", url)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>()
                {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {


                        String status = result.get("status").getAsString();
                        if (status.equals("success")) {
//                            Log.e("Teacher..", e.toString());
                            Log.e("Teacher..", result.toString());

                            //Get User Data
                            System.out.println(result.toString());
                            JsonArray array = result.get("data").getAsJsonArray();

                            for(int index = 0; index < array.size(); index++)
                            {
                                JsonObject object = array.get(index).getAsJsonObject();
                                Student student = new Student();

                                student.setFirstName(object.get("SFNAME").getAsString());
                                student.setLastName(object.get("SLNAME").getAsString());
                                student.setsClass(object.get("SCLASS").getAsString());
//                                System.out.println(  index + "   :   " + student.toString());
                                students.add(student);
                            }

                            adaptor.notifyDataSetChanged();

                        }
                        else
                        {
                            Log.e("Teacher stu List..", e.toString());
                        }
                    }
                });

    }
}
