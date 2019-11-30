import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import * as toastr from "toastr";

@Component({
    selector: 'app-faculty-add',
    templateUrl: 'faculty.add.component.html',
    styleUrls:['faculty.add.component.css']
})

export class FacultyAddComponent implements OnInit {
    CID: number
    FFIRSTNAME: string
    FLASTNAME: string
    FADDRESS: string
    FGENDER: string
    FSUBJECTSPECILITY: string
    FMOBILE = 0
    constructor(private service : FacultyService) 
    {

    }

    onAdd()
    {
        this.service.addTeachers(this.CID, this.FFIRSTNAME , this.FLASTNAME , this.FADDRESS , this.FGENDER , this.FSUBJECTSPECILITY , this.FMOBILE )
        .subscribe(response => 
        {
            if(response['status'] == 'success')
            {
                toastr.success('Dara Added')
                
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



