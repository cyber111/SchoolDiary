package com.pjpratikjain7.schooldiary.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.pjpratikjain7.schooldiary.R;
import com.pjpratikjain7.schooldiary.model.Remark;

import java.util.ArrayList;

public class RemarkListAdaptor extends RecyclerView.Adapter<RemarkListAdaptor.ViewHolder>
{
    public final  Context context;
    public final ArrayList<Remark> remarks;

    public RemarkListAdaptor(Context context, ArrayList<Remark> remarks) {
        this.context = context;
        this.remarks = remarks;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        LayoutInflater inflater = LayoutInflater.from(context);

        return new ViewHolder(inflater.inflate(R.layout.fragment_remark_list_item, viewGroup, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder viewHolder, int i)
    {
        Remark remark = remarks.get(i);


        viewHolder.tvRemark.setText(remark.getRemark().toString());
        viewHolder.tvDate.setText(remark.getDate().toString());
    }


    @Override
    public int getItemCount() {
        return remarks.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        TextView tvDate, tvRemark;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            tvDate = itemView.findViewById(R.id.textViewRemarkFragmentListDate);
            tvRemark = itemView.findViewById(R.id.textViewRemarkFragmentListRemarkText);
        }
    }
}
