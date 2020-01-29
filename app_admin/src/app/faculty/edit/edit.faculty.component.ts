import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { Router } from "@angular/router";
import * as toastr from 'toastr' 
@Component({
    selector: 'app-faculty-edit',
    templateUrl: 'edit.faculty.component.html',
    styleUrls:['edit.faculty.component.css']
})

export class FacultyEditComponent implements OnInit {

    CID: number
    FFIRSTNAME: string
    FLASTNAME: string
    FADDRESS: string
    FGENDER: string
    FSUBJECTSPECILITY: string
    FMOBILE = 0

    constructor(private router:Router,private activateRoute: ActivatedRoute, private service : FacultyService) 
    {
        const id = this.activateRoute.snapshot.params['FID']
        console.log(id);
        


        this.service.getFacultyById(id)
        .subscribe(response =>
                    {
                        console.log(id);
                        
                        if(response['status'] == 'success')
                        {
                            console.log(response['data'])
                            this.CID = response['data'][0].CID
                            this.FFIRSTNAME = response['data'][0].FFIRSTNAME
                            this.FLASTNAME = response['data'][0].FLASTNAME
                            this.FADDRESS = response['data'][0].FADDRESS
                            this.FGENDER = response['data'][0].FGENDER
                            this.FSUBJECTSPECILITY = response['data'][0].FSUBJECTSPECILITY
                            this.FMOBILE = response['data'][0].FMOBILE
                        }
                        else
                        {
                            console.log(response['error'])
                            toastr.error('ErrorErrorError')
                        }
                    })

        
    }

     onUpdate() 
     {
         
     }

 

    ngOnInit() { }
}