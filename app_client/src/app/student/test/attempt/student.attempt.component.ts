import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from "../../student.service";
import * as toastr from "toastr";

@Component({
    selector: 'app-student-attempt',
    templateUrl: 'student.attempt.component.html',
    styleUrls:['student.attempt.component.css']
})

export class StudentAttemptComponent implements OnInit {
    constructor(private service :  StudentService, private router : Router) 
    { 
        this.getQuestionByid()
    }
    tests
    answer:string

    getQuestionByid()
    {
        this.service.getQuestion(sessionStorage['test_id'])
        .subscribe(response => {
            if (response['status'] == 'success') {
                toastr.success(response['status'])                // this.router.navigate(['/faculty-question'])
                this.tests  = response['data']
                console.log(response['data'])
            }
            else
            {
                toastr.error("Error")
                console.log(response['error']);
            }
        })
    }


    onSubmit(test_id:number, q_id:number)
    {
        this.service.insertAnswers(q_id,this.answer,test_id,sessionStorage['sid'])
        .subscribe(response => {
            if (response['status'] == 'success') {
                // alert(response['status'])
                toastr.success(" Question submitted " )
                // this.router.navigate(['/faculty-question'])
                this.tests  = response['data']
                console.log(response['data'])
            }
            else
            {
                toastr.error("Error")
                console.log(response['error']);
            }
        })

    }

    

    ngOnInit() { }
}