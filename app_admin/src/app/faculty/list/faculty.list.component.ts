import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import * as toastr from "toastr";

@Component({
    selector: 'app-faculty-list',
    templateUrl: 'faculty.list.component.html',
    styleUrls:['faculty.list.component.css']

})

export class FacultyListComponent implements OnInit {

    faculties: any[]
    constructor(private service : FacultyService) 
    {
        this.showList()
     }


    showList()
    {
        this.service.getTeachers()
        .subscribe(response => {
            if(response['status'] == 'success')
            {
                console.log('hello');
                this.faculties = response['data']
                console.log(this.faculties);   
            }
            else
            {
                toastr.error('error error error')
            }
        })
    }

    onDelete(id : number)
    {
        this.service.deleteFaculty(id)
        .subscribe(response => {
            if(response['status'] == 'success')
            {
                toastr.success('Data Deleted')
                this.showList()
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