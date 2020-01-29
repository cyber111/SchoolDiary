import { Component, OnInit } from '@angular/core';
import { FacultyService } from "../faculty.service";
import { Router } from "@angular/router";

@Component({
    selector: 'faculty-test',
    templateUrl: 'faculty.test.component.html',
    styleUrls:['faculty.test.component.css']
})

export class FacultyTestComponent implements OnInit {

    constructor(private service : FacultyService, private router: Router) 
    {
        this.getTest()
    }
    tests

    getTest()
    {
        this.service.getTest()
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

    onEdit(id:number)
    {
        sessionStorage["test_id"] = id
        this.router.navigate(['/faculty-question'])
    }

    ngOnInit() { }
}