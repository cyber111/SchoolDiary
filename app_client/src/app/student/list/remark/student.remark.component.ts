import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
    selector: 'app-student-remark',
    templateUrl: 'student.remark.component.html',
    styleUrls: ['student.remark.component.css']
})
    
export class StudentRemarkComponent implements OnInit {

    remarks : any[]
    CID = sessionStorage['cid']
    sid  
    remark
    date   
    
    constructor(private router : Router, private service : StudentService) 
    { 
        
        this.showRemarks()
        
    }

    




    showRemarks()
    {
        this.service
        .getRemark( sessionStorage['sid'] )
        .subscribe(response =>{

            if(response['status'] == 'success')
            {
                console.log('hello');
                this.remarks = response['data']
                console.log(this.remarks);     
            }
            else
            {
                console.log(response['error']);
                
                toastr.error('error error error')
            }

        })
    }

   



    ngOnInit() { }
}