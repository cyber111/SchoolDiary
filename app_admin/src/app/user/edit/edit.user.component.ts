import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import * as toastr from 'toastr' 
@Component({
    selector: 'app-student-edit',
    templateUrl: 'edit.student.component.html',
    styleUrls:['edit.student.component.css']
})

export class StudentEditComponent implements OnInit {

    S_ID :number
    FirstName : ''
    LastName : ''
    RollNo : null
    ParentID : null 
    Gender : ''
    Board : ''
    Address : ''
    BirthDate : string
    Email : ''
    Class : ''
    Division : ''
    DiviosnID : null
    ClassID : null
    USerID : null

    constructor(private router:Router,private activateRoute: ActivatedRoute, private service : UserService) 
    {
        // const id = this.activateRoute.snapshot.params['S_ID']
        // //console.log(id);
        // this.service.getstudent(id).subscribe(response =>{
        //     if(response['status'] == 'success')
        //     {              
        //         const student = response['data']
        //         console.log(response['data'])
        //         const s = student['0']
    
        //         this.FirstName = s.SFNAME
        //         this.S_ID = s.S_ID
        //         this.LastName = s.SLNAME
        //         this.RollNo  = s.SROLLNO
        //         this.ParentID   = s.PID
        //         this.Gender = s.SGENDER
        //         this.Board = s.SBOARD   
        //         this.Address = s.SADDRESS
        //         this.BirthDate  = s.SBIRTHDATE.split("T",1) 
        //         this.Email = s.SEMAIL  
        //         this.Class = s.SCLASS
        //         this.Division = s.SDIVISION
        //         this.DiviosnID  = s.DID
        //         this.ClassID  = s.CID
        //         this.USerID  = s.UID
        // })
        
     }

     onUpdate()
     {
        // this.service.updateStudent(this.S_ID,
        //     this.FirstName, this.LastName, this.RollNo, 
        //     this.ParentID, this.Gender, this.Board, 
        //     this.Address, this.BirthDate, this.Email, 
        //     this.Class, this.Division, this.DiviosnID, 
        //     this.ClassID, this.USerID
        // ).
        // subscribe(response =>
        //     {
        //         if(response['status'] == 'success')
        //         {
        //             toastr.success('Datta Added')
                    
        //         }
        //         else
        //         {
        //             console.log(response['error'])
        //             toastr.error('ErrorErrorError')
        //         }
        //     })
        //     this.router.navigate(['/students-list'])
     }

 

    ngOnInit() { }
}