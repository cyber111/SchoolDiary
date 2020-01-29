package com.pjpratikjain7.schooldiary.model;

public class User
{
    private int uid;


    private String email;
    private String username;
    private String password;
    private int is_block;
    private String role;


    public User(){
    }

    public User(String email, String username, String password, int is_block, String role) {


        this.email = email;
        this.username = username;
        this.password = password;
        this.is_block = is_block;
        this.role = role;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", is_block=" + is_block +
                ", role='" + role + '\'' +
                '}';
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getUid() {
        return uid;
    }

    public User(int uid, String email, String username, String password, int is_block, String role) {
        this.uid = uid;
        this.email = email;
        this.username = username;
        this.password = password;
        this.is_block = is_block;
        this.role = role;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setIs_block(int is_block) {
        this.is_block = is_block;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public int getIs_block() {
        return is_block;
    }

    public String getRole() {
        return role;
    }
}
