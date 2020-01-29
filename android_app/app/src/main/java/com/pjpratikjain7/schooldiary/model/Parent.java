package com.pjpratikjain7.schooldiary.model;

public class Parent
{
    private int pid;
    private int sid;
    private String firstName;
    private String lastName;
    private int mobile;
    private String email;
    private String address;
    private String relarion;

    public Parent() {

    }

    public Parent(int pid, int sid, String firstName, String lastName, int mobile, String email, String address, String relarion) {
        this.pid = pid;
        this.sid = sid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.address = address;
        this.relarion = relarion;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRelarion() {
        return relarion;
    }

    public void setRelarion(String relarion) {
        this.relarion = relarion;
    }

    @Override
    public String toString() {
        return "Parent{" +
                "pid=" + pid +
                ", sid=" + sid +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", mobile=" + mobile +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", relarion='" + relarion + '\'' +
                '}';
    }
}
