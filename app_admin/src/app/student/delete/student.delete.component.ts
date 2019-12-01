import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
    selector: 'app-delete-student',
    templateUrl: 'student.delete.component.html',
    styleUrls:['student.delete.component.css']
})

export class StudentDeleteComponent implements OnInit {
    constructor(private service: StudentService) { }

    ngOnInit() { }
}