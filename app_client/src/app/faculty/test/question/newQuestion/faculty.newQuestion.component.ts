import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from "../../../faculty.service";

@Component({
    selector: 'app-faculty-newQuestion',
    templateUrl: 'faculty.newQuestion.component.html',
    styleUrls:['faculty.newQuestion.component.css']
})

export class FacultyNewQuestionComponent implements OnInit {

    test_id
    question
    answer    
    constructor(private router: Router, private service : FacultyService)
     {
        this.test_id = sessionStorage["test_id"]
     }
  
     onAddQuestion()
     {
        this.service.addQuestion(this.test_id, this.question, this.answer)
        .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                this.router.navigate(['/faculty-question'])
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