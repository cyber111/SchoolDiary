import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
    selector: 'faculty-notice',
    templateUrl: 'faculty.notice.component.html',
    styleUrls: ['faculty.notice.component.css']
})

export class FacultyNoticeComponent implements OnInit {

    newFlag = false
    editFlag = false
    deleteFlag = false
    text: string
    notices:[]
    constructor(private service: FacultyService) {
        
        
    }


    setNotices() {
        this.service.setNotice(this.text)
            .subscribe(response => {
                if (response['status'] == 'success') {
                    alert(response['status'])
                    

                }
                else
                {
                    alert("Error")
                    console.log(response['error']);
                }

            })

    }

    loadNotices()
    {
        this.service.getNotice()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    this.notices=response['data']
                    
                }
                else
                    alert("Error")
                    
                    

            })

    }
    

    onNewNotice() {
        this.newFlag = true
        this.editFlag = false
        this.deleteFlag = false
    }

    onEditNotice() {
        this.editFlag = true
        this.deleteFlag = false
        this.newFlag = false
        this.loadNotices()
    }

    onDeleteNotice() {
        this.deleteFlag = true
        this.newFlag = false
        this.editFlag = false
    }
    ngOnInit() { }
}