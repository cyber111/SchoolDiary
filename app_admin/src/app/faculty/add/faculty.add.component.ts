import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import * as toastr from "toastr";
import { FacultyListComponent } from '../list/faculty.list.component';
import { Router } from "@angular/router";

@Component({
    selector: 'app-faculty-add',
    templateUrl: 'faculty.add.component.html',
    styleUrls:['faculty.add.component.css']
})

export class FacultyAddComponent implements OnInit {

    FID: number
    CID: number
    FFIRSTNAME: string
    FLASTNAME: string
    FADDRESS: string
    FGENDER: string
    FSUBJECTSPECILITY: string
    FMOBILE = 0
    constructor(private service : FacultyService,private list : FacultyListComponent, private router: Router) 
    {

    }

    onAdd()
    {
        this.service.addTeachers(this.CID, this.FFIRSTNAME , this.FLASTNAME , this.FADDRESS , this.FGENDER , this.FSUBJECTSPECILITY , this.FMOBILE )
        .subscribe(response => 
        {
            if(response['status'] == 'success')
            {
                toastr.success('Data Added') 
                this.router.navigate(['/faculty-list'])       
                this.list.showList()
            }
            else
            {
                console.log(response['error'])
                toastr.error('ErrorErrorError')
            }
        })
    }

    ngOnInit() { }
}    



