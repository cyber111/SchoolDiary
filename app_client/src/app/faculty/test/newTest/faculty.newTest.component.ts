import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from "../../faculty.service";

@Component({
    selector: 'app-faculty-newTest',
    templateUrl: 'faculty.newTest.component.html',
    styleUrls:['faculty.newTest.component.css']
})

export class FacultyNewTestComponent implements OnInit {


    test_name
    date
    subject
    tests:any
    class_name
    class_id
    constructor(private router: Router, private service : FacultyService)
     {
        // this.getTest()

     }
  
     onAddTest()
     {
         console.log(this.class_name);
         if(this.class_name == "10TH")
         {
              this.class_id = 1  
         }else if(this.class_name == "9TH")
         {
            this.class_id = 2
         }else if(this.class_name == "8TH")
         {
            this.class_id = 3
         }
         console.log(this.class_id);
         
        this.service.addTest(this.test_name, this.date, this.subject, this.class_name, this.class_id)
        .subscribe(response => {
            if (response['status'] == 'success') {
                alert(response['status'])
                this.router.navigate(['/faculty-test'])
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