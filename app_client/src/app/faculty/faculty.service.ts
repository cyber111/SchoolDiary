import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FacultyService {
    constructor(private httpClient: HttpClient) { }


    url = 'http://localhost:5000/faculty'
    url1 = 'http://localhost:5000/notice'
    url2 = 'http://localhost:5000/classes'
    url3 = 'http://localhost:5000/schedule'
    url4 = 'http://localhost:5000/test'
    url5 = 'http://localhost:5000/question'

    getTeachers() {
        return this.httpClient.get(this.url)
    }

    addTeachers(
        CID: number,
        FFIRSTNAME: string,
        FLASTNAME: string,
        FADDRESS: string,
        FGENDER: string,
        FSUBJECTSPECILITY: string,
        FMOBILE = 0
    ) {
        const body =
        {
            CID: CID,
            FFIRSTNAME: FFIRSTNAME,
            FLASTNAME: FLASTNAME,
            FADDRESS: FADDRESS,
            FGENDER: FGENDER,
            FSUBJECTSPECILITY: FSUBJECTSPECILITY,
            FMOBILE: FMOBILE

        }
        return this.httpClient.post(this.url, body)
    }

    deleteFaculty(id: number) {
        return this.httpClient.delete(this.url + '/' + id)
    }


    getFaculty(uid: number) {
        return this.httpClient.get(this.url + '/' + uid)
    }


    setNotice(text: string) {
        const body = {
            notice_text: text
        }

        return this.httpClient.post(this.url1 + '/setnotice', body)
    }

    getNotice() {
        return this.httpClient.get(this.url1 + '/notice');
    }

    editNotice(text: string, id: number) {
        const body = {
            notice_text: text,
            id: id
        }
        console.log("........." + body)
        return this.httpClient.put(this.url1 + '/editnotice', body)
    }

    getClasses() {
        return this.httpClient.get(this.url2)
    }


    getSchedule() {
        return this.httpClient.get(this.url3)
    }


    addSchedule(date: string, details: string, day: string) {
        const body =
        {
            date: date,
            details: details,
            day: day
        }

        return this.httpClient.post(this.url3, body)
    }

    addTest(test_name:string ,date:string ,subject:string, class_name:string, class_id: number) {
        const body =
        {
            test_name : test_name,
            date : date,
            subject : subject,
            class_name : class_name,
            class_id : class_id
        }
        return this.httpClient.post(this.url4, body)
    }

    getTest() {

        return this.httpClient.get(this.url4)
    }

    addQuestion(test_id: number, question: string, answer: string) {
        const body =
        {
            test_id:test_id,
            question:question,
            answer:answer
        }
        return this.httpClient.post(this.url5, body)
    }

    getQuestion(test_id: number) {
        const body = 
        {
            test_id:test_id
        }
        return this.httpClient.post(this.url5 + "/byid", body)
    }

}




