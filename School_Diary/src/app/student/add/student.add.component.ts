import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-add',
    templateUrl: 'student.add.component.html',
    styleUrls: ['student.add.component.css']
})

export class StudentAddComponent implements OnInit {

    
    FirstName : ''
    LastName : ''
    RollNo : null
    ParentID : null 
    Gender : ''
    Board : ''
    Address : ''
    BirthDate : Date
    Email : ''
    Class : ''
    Division : ''
    DiviosnID : null
    ClassID : null
    USerID : null
        

 


    constructor(private service: StudentService, private router : Router)
    {
        

    }

    onAdd()
    {
        console.log(this.FirstName, this.LastName, this.RollNo, this.ParentID, this.Gender, this.Board, this.Address, this.BirthDate, this.Email, this.Class, this.Division, this.DiviosnID, this.ClassID, this.USerID);
        this.addStudent(this.FirstName, this.LastName, this.RollNo, this.ParentID, this.Gender, this.Board, this.Address, this.BirthDate, this.Email, this.Class, this.Division, this.DiviosnID, this.ClassID, this.USerID)
        this.router.navigate(['students-list'])
    }
    addStudent(FirstName: string, LastName: string, RollNo: string, ParentID: string, Gender: string, Board: string, Address: string, BirthDate:Date, Email: string, Class: string, Division: string, DiviosnID: string, ClassID: string, USerID: string) 
    {
        this.service.addStudent
        (
            FirstName, LastName, RollNo, 
            ParentID, Gender, Board, 
            Address, BirthDate, Email, 
            Class, Division, DiviosnID, 
            ClassID, USerID
        )
        .subscribe(response =>
        {
            if(response['status'] == 'success')
            {
                toastr.success('Dara Added')
                
            }
            else
            {
                console.log(response['error'])
                toastr.error('ErrorErrorError')
            }
        })
    }

    ngOnInit() { }
}