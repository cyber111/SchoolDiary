package com.pjpratikjain7.schooldiary.model;

public class Remark
{
    private String remark;
    private String date;


    public Remark() {
    }

    public Remark(String remark, String date) {
        this.remark = remark;
        this.date = date;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    @Override
    public String toString() {
        return "Remark{" +
                "remark='" + remark + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
