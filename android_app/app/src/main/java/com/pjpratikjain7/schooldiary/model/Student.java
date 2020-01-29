package com.pjpratikjain7.schooldiary.model;

import java.util.Date;

public class Student
{
    private int sid;
    private String firstName;
    private String lastName;
    private int rollNo;
    private int pid;
    private String gender;
    private String board;
    private String address;
    private String email;
    private Date birthDate;
    private String division;
    private String sClass;

    public Student() {

    }

    public Student(int sid, String firstName, String lastName, int rollNo, int pid, String gender, String board, String address, String email, Date birthDate, String division, String sClass) {
        this.sid = sid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.pid = pid;
        this.gender = gender;
        this.board = board;
        this.address = address;
        this.email = email;
        this.birthDate = birthDate;
        this.division = division;
        this.sClass = sClass;
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

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBoard() {
        return board;
    }

    public void setBoard(String board) {
        this.board = board;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getsClass() {
        return sClass;
    }

    public void setsClass(String sClass) {
        this.sClass = sClass;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sid=" + sid +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", rollNo=" + rollNo +
                ", pid=" + pid +
                ", gender='" + gender + '\'' +
                ", board='" + board + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", birthDate=" + birthDate +
                ", division='" + division + '\'' +
                ", sClass='" + sClass + '\'' +
                '}';
    }
}
