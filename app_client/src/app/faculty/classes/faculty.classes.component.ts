import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import * as toastr from "toastr";


@Component({
    selector: 'app-classes-list',
    templateUrl: 'faculty.classes.component.html',
    styleUrls : ['faculty.classes.component.css']
})

export class FacultyClassesComponent implements OnInit {


    classes : any[]
    constructor(private service : FacultyService, private router : Router)
     {
        this.showClasses()
      }


    showClasses()
    {
        this.service.getClasses()
        .subscribe(response => {
            if(response['status'] == 'success')
            {
                console.log('hello');
                this.classes = response['data']
                console.log(this.classes);   
            }
            else
            {
                toastr.error('error error error')
            }
        })
    }


    onShowStudent(CID: number)
    {
        console.log("show student");
        sessionStorage['cid'] = CID
        this.router.navigate(['/students-list'])
        console.log("show student 2");
    }
    
    ngOnInit() { }

}