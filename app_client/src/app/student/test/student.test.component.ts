import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from "../student.service";
import * as toastr from "toastr";

@Component({
    selector: 'app-student-test',
    templateUrl: 'student.test.component.html',
    styleUrls:['student.test.component.css']
})

export class StudentTestComponent implements OnInit {
    constructor(private service :  StudentService, private router : Router) 
    { 
        this.getTests()
    }
    tests

    getTests()
    {
        this.service.getTest()
        .subscribe(response => {
            if (response['status'] == 'success') {
                toastr.success("success")
                // this.router.navigate(['/faculty-question'])
                this.tests  = response['data']
                console.log(response['data'])
            }
            else
            {
                toastr.danger("Error")
                console.log(response['error']);
            }
        })
    }


    onAttempt(id : number)
    {
        sessionStorage['test_id'] = id
        this.service.getQuestion(id)
        .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                this.router.navigate(['/students-attempt'])
                this.tests  = response['data']
                console.log(response['data'])
            }
            else
            {
                alert("Error")
                console.log(response['error']);
            }
        })
    }

    ngOnInit() { }
}