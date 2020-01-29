import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
    selector: 'app-student-list',
    templateUrl: 'student.list.component.html',
    styleUrls: ['student.list.component.css']
})
    
export class StudentListComponent implements OnInit {

    students : any[]
    CID = sessionStorage['cid']
    sid     
    
    constructor(private router : Router, private service : StudentService) 
    { 
        
        this.showList()
        console.log(this.CID);
        
    }

    showList()
    {
        this.service
        .getstudentById( this.CID )
        .subscribe(response =>{

            if(response['status'] == 'success')
            {
                console.log('hello');
                this.students = response['data']
                console.log(this.students);     
            }
            else
            {
                console.log(response['error']);
                
                toastr.error('error error error')
            }

        })
    }


    oninfo(sid:number)
    {
        sessionStorage['sid'] = sid
        this.router.navigate(['/students-profile/'])
    }

    onRemark(sid : number)
    {
        sessionStorage['sid'] = sid
        this.router.navigate(['/students-remark'])
        
    }



    ngOnInit() { }
}