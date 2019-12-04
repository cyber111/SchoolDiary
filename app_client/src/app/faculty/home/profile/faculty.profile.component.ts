import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/faculty/faculty.service';
import * as toastr from "toastr";

@Component({
    selector: 'faculty-profile',
    templateUrl: 'faculty.profile.component.html',
    styleUrls: ['faculty.profile.component.css']
})

export class FacultyProfileComponent implements OnInit {
    faculties: any[]
    constructor(private router: Router, private service: FacultyService) {

        this.showList()
    }
    uid = sessionStorage['uid']


    showList() {
        this.service
            .getFaculty(this.uid)
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log('hello');
                    this.faculties = response['data']
                    console.log(this.faculties);

                }
                else {
                    toastr.error('error error error')
                }
            })
    }




    ngOnInit() { }
}