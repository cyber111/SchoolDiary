import { Component, OnInit } from '@angular/core';
import { FacultyService } from "../../../faculty.service";

@Component({
    selector: 'faculty-question',
    templateUrl: 'faculty.question.component.html',
    styleUrls:['faculty.question.component.css']
})

export class FacultyQuestionComponent implements OnInit {

    constructor(private service : FacultyService) 
    {
            this.getQuestionByid()
    }
    tests

    getQuestionByid()
    {
        this.service.getQuestion(sessionStorage['test_id'])
        .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                // this.router.navigate(['/faculty-question'])
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