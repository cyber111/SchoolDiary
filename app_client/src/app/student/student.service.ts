import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class StudentService {
    url = 'http://localhost:5000/student';
    url1 = 'http://localhost:5000/test';
    url2 = 'http://localhost:5000/question';
    url3 = 'http://localhost:5000/remark';
    url4 = 'http://localhost:5000/answer';
    constructor(private http: HttpClient) {
        this.getstudents()
    }

    getstudents() {
        return this.http.get(this.url)
    }



    getstudent(id: number) {
        return this.http.get(this.url + '/' + id)
    }

    getstudentById(cid: number) {
        return this.http.post(this.url + '/bycid/', { id: cid })
    }

    addStudent(
        FirstName: string, LastName: string, RollNo: string,
        ParentID: string, Gender: string,
        Board: string, Address: string, BirthDate: Date,
        Email: string, Class: string, Division: string,
        DiviosnID: string, ClassID: string, USerID: string
    ) {
        const body =
        {
            FirstName: FirstName,
            LastName: LastName,
            RollNo: RollNo,
            ParentID: ParentID,
            Gender: Gender,
            Board: Board,
            Address: Address,
            BirthDate: BirthDate,
            Email: Email,
            Class: Class,
            Division: Division,
            DiviosnID: DiviosnID,
            ClassID: ClassID,
            USerID: USerID
        }
        return this.http.post(this.url, body)
    }

    updateStudent(S_ID: number,
        FirstName: string, LastName: string, RollNo: string,
        ParentID: string, Gender: string,
        Board: string, Address: string, BirthDate: string,
        Email: string, Class: string, Division: string,
        DiviosnID: string, ClassID: string, USerID: string
    ) {
        const body =
        {
            S_ID: S_ID,
            FirstName: FirstName,
            LastName: LastName,
            RollNo: RollNo,
            ParentID: ParentID,
            Gender: Gender,
            Board: Board,
            Address: Address,
            BirthDate: BirthDate,
            Email: Email,
            Class: Class,
            Division: Division,
            DiviosnID: DiviosnID,
            ClassID: ClassID,
            USerID: USerID
        }
        console.log(body);

        return this.http.put(this.url + '/' + S_ID, body)
    }

    getTest() {
        return this.http.get(this.url1)
    }

    getQuestion(test_id: number) {
        const body =
        {
            test_id: test_id
        }
        return this.http.post(this.url2 + "/byid", body)
    }

    getRemark(sid: number)
    {
        return this.http.post(this.url3 + "/bysid", {sid:sid})
    }

    insertRemark(sid:number, remark:string, date:Date)
    {
        const body =
         {
            sid:sid,
            remark:remark,
            date:date
        }
        return this.http.post(this.url3 , body)
    }

    insertAnswers(q_id: number, answer:string, test_id:number, sid:number)
    {
        const body = {
            q_id : q_id,
            answer: answer,
            test_id: test_id,
            sid: sid
        }
        return this.http.post(this.url4, body)
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


