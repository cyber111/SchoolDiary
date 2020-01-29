import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student/student.service';
import * as toastr from "toastr";
import { log } from 'util';

@Component({
    selector: 'student-profile',
    templateUrl: 'student.profile.component.html',
    styleUrls: ['student.profile.component.css']
})

export class StudentProfileComponent implements OnInit {
    students: any[]
    sid
    constructor(private router: Router, private service: StudentService) {

        
  
        if(sessionStorage['role'] == 'faculty')
        {
            this.sid = sessionStorage['sid']
        }
        else if(sessionStorage['role'] == 'student')
        {
            this.sid = sessionStorage['uid']
            console.log("++++" + this.sid);  
        }

        this.showList()
    }

    
    
  
    
    showList() {
        console.log( "---" + this.sid);
         
        this.service
            .getstudent(this.sid)
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log('hello');
                    this.students = response['data']
                    console.log(this.students);

                }
                else {
                    console.log("Student-Profile-Error");
                    toastr.error('error error error')
                }
            })
    }




    ngOnInit() { }
}