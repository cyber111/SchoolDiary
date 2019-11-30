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
    
    addStudent(
        FirstName: string, LastName: string, RollNo: string, 
        ParentID: string, Gender: string, 
        Board: string, Address: string, BirthDate:Date, 
        Email: string, Class: string, Division: string, 
        DiviosnID: string, ClassID: string, USerID: string
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
            USerID :USerID
         }
        return this.http.post(this.url, body)
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


