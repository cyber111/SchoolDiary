package com.pjpratikjain7.schooldiary.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.model.Student;

import java.util.ArrayList;

public class TeacherStudentAdaptor extends RecyclerView.Adapter<TeacherStudentAdaptor.ViewHolder> {


    public final Context context;
    public final ArrayList<Student> students;

    public TeacherStudentAdaptor(Context context, ArrayList<Student> students) {
        this.context = context;
        this.students = students;
    }


    @NonNull
    @Override
    public ViewHolder  onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        LayoutInflater inflater = LayoutInflater.from(context);

        return new ViewHolder(inflater.inflate(R.layout.teacher_student_list_item,viewGroup, false));
    }

    @Override
    public void onBindViewHolder(@NonNull TeacherStudentAdaptor.ViewHolder viewHolder, int i) {

        Student student = students.get(i);

        System.out.println(student.toString());

        viewHolder.tvName.setText(student.getFirstName().toString() + student.getLastName().toString() );
        viewHolder.tvClass.setText(student.getsClass().toString());


    }



    @Override
    public int getItemCount() {
        return students.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        TextView tvName, tvClass;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            tvName = itemView.findViewById(R.id.textViewName);
            tvClass = itemView.findViewById(R.id.textViewClass);

        }
    }
}
