import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FacultyService {
    constructor(private httpClient: HttpClient) { }


    url = 'http://localhost:5000/faculty'
    url1 = 'http://localhost:5000/notice'

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
            FGENDER:FGENDER,
            FSUBJECTSPECILITY: FSUBJECTSPECILITY,
            FMOBILE : FMOBILE

        }
        return this.httpClient.post(this.url, body)
    }

    deleteFaculty(id: number)
    {
        return this.httpClient.delete(this.url + '/' + id)
    }


    getFaculty(uid : number)
    {
        return this.httpClient.get(this.url +'/'+ uid)
    }


    setNotice(text:string)
    {
        const body = {
            notice_text:text
        }

        return this.httpClient.post(this.url1 + '/setnotice',body)
    }

    getNotice()
    {
        return this.httpClient.get(this.url1 + '/notice');
    }

    editNotice(text: string, id: number)
    {
        const body = {
            notice_text:text,
            id:id
        }
        console.log("........." + body)
        return this.httpClient.put(this.url1 + '/editnotice',body)
    }
}




    