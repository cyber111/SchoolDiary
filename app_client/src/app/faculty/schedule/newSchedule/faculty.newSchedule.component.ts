import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from "../../faculty.service";

@Component({
    selector: 'app-faculty-newSchedule',
    templateUrl: 'faculty.newSchedule.component.html',
    styleUrls:['faculty.newSchedule.component.css']
})

export class FacultyNewSchduleComponent implements OnInit {


    date
    details
    day
    constructor(private router: Router, private service : FacultyService)
     {

     }
  
     onAddSchedule()
     {
         this.service.addSchedule(this.date, this.details, this.day)
         .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                this.router.navigate(['/faculty-schedule'])
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