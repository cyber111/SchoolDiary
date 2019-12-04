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
    constructor(private router: Router, private service: StudentService) {

        this.showList()
    }
    uid  = sessionStorage['uid']
    
    
    showList() {
        console.log(this.uid);
         
        this.service
            .getstudent(this.uid)
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log('hello');
                    this.students = response['data']
                    console.log(this.students);

                }
                else {
                    toastr.error('error error error')
                }
            })
    }




    ngOnInit() { }
}