import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import * as toastr from "toastr";
@Component({
    selector: 'app-student-list',
    templateUrl: 'student.list.component.html',
    styleUrls: ['student.list.component.css']
})

export class StudentListComponent implements OnInit {

    students : any[]
    constructor(private service : StudentService) 
    { 
        this.showList()
    }

    showList()
    {
        this.service
        .getstudents()
        .subscribe(response =>{
            if(response['status'] == 'success')
            {
                console.log('hello');
                this.students = response['data']
                console.log(this.students);
                    
            }
            else
            {
                toastr.error('error error error')
            }
        })
    }

    ngOnInit() { }
}