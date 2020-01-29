import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../student.service';
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
    selector: 'app-student-NewRemark',
    templateUrl: 'student.NewRemark.component.html',
    styleUrls: ['student.NewRemark.component.css']
})
    
export class StudentNewRemarkComponent implements OnInit {

    remarks : any[]
    CID = sessionStorage['cid']
    sid  
    remark
    date   
    
    constructor(private router : Router, private service : StudentService) 
    { 
         this.sid = sessionStorage['sid'] 
    }

    

    

    insertRemark()
    {
        this.service
        .insertRemark(this.sid, this.remark, this.date)
        .subscribe(response =>{

            if(response['status'] == 'success')
            {
                console.log('hello');
                console.log(this.remarks);     
            }
            else
            {
                console.log(response['error']);
                
                toastr.error('error error error')
            }

        })
        this.router.navigate(['/students-remark'])
    }



    ngOnInit() { }
}