import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FacultyService {
    constructor(private httpClient: HttpClient) { }


    url = ' http://localhost:5000/faculty'

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
            text:text
        }

        return this.httpClient.post(this.url,body)
    }

}




