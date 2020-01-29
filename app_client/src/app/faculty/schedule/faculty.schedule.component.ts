import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from "../faculty.service";

@Component({
    selector: 'app-faculty-schedule',
    templateUrl: 'faculty.schedule.component.html',
    styleUrls:['faculty.schedule.component.css']
})

export class FacultySchduleComponent implements OnInit {


schedule : any

    constructor(private router: Router, private service : FacultyService) 
    {
        this.getSchedule()
    }


    getSchedule()
    {
        this.service.getSchedule()
        .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                console.log(response['data'])
                this.schedule = response['data']
                console.log(this.schedule);
                
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