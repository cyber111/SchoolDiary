import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class StudentService {
    url = 'http://localhost:5000/student';
    constructor(private http: HttpClient) 
    { 
        this.getstudents()   
    }

    getstudents()
    {
        return this.http.get(this.url)
    }

    getstudent(id : number)
    {
        return this.http.get(this.url +'/'+ id)
    }
    
    addStudent(
        FirstName: string, LastName: string, RollNo: string, 
        ParentID: string, Gender: string, 
        Board: string, Address: string, BirthDate:Date, 
        Email: string, Class: string, Division: string, 
        DiviosnID: string, ClassID: string, USerID: string, UserName: string, Password: string
        )
    {
        const body =
         {
            FirstName :FirstName,
            LastName :LastName,
            RollNo :RollNo,
            ParentID :ParentID,
            Gender :Gender,
            Board :Board,
            Address :Address,
            BirthDate :BirthDate,
            Email :Email,
            Class :Class,
            Division :Division,
            DiviosnID :DiviosnID,
            ClassID :ClassID,
            USerID :USerID,
            UserName:UserName,
            Password:Password
         }
        return this.http.post(this.url, body)
    }
    deleteStudent(id: number)
    {
        return this.http.delete(this.url + '/' + id)
    }

    updateStudent(S_ID:number,
        FirstName: string, LastName: string, RollNo: string, 
        ParentID: string, Gender: string, 
        Board: string, Address: string, BirthDate:Date, 
        Email: string, Class: string, Division: string, 
        DiviosnID: string, ClassID: string, USerID: string
        )
    {
        const body =
         {
            S_ID: S_ID,
            FirstName :FirstName,
            LastName :LastName,
            RollNo :RollNo,
            ParentID :ParentID,
            Gender :Gender,
            Board :Board,
            Address :Address,
            BirthDate :BirthDate,
            Email :Email,
            Class :Class,
            Division :Division,
            DiviosnID :DiviosnID,
            ClassID :ClassID,
            USerID :USerID
         }
         console.log(body);
         
        return this.http.put(this.url + '/' + S_ID, body)
    }
}

// STUDENT
// S_ID
// SFIRSTNAME
// SLASTNAME
// SROLLNO
// PID 
// SGENDER
// SBOARD
// SADDRESS
// SBIRTHDATE
// SEMAIL
// SCLASS
// SDIVISION
// DID
// CID
// UID


