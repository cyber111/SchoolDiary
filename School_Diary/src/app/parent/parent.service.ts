import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ParentService {

    url = 'http://localhost:5000/parent'
   
    constructor(private httpClient: HttpClient) {

    }

    getParent() 
    {
        return this.httpClient.get(this.url)
    }

    addParent(
        s_id :number,
        pfirstname: string,
        plastname: string, pmobile: string,
        pemail: string, paddress: string, prelation: string
    )
     {
        const body =
        {
            s_id :s_id ,
            pfirstname:pfirstname,
            plastname:plastname,
            pmobile:pmobile,
            pemail:pemail,
            paddress:paddress,
            prelation:prelation
        }
        return this.httpClient.post(this.url, body)
    }

}