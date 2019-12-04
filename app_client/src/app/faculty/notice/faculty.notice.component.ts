import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
    selector: 'faculty-notice',
    templateUrl: 'faculty.notice.component.html',
    styleUrls:['faculty.notice.component.css']
})

export class FacultyNoticeComponent implements OnInit {


    text:string
    constructor(private service : FacultyService) { }


    onNotice()
    {
        this.service.setNotice(this.text)
        .subscribe(response =>{
            if(response['status'] == 'success')
            {
                alert("Generated")
            }
            else
                alert("Error")
            
        })
        
    }
    ngOnInit() { }
}