import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../parent.service';
import { Router } from "@angular/router";
import * as toastr from 'toastr' 
@Component({
    selector: 'app-parent-edit',
    templateUrl: 'edit.parent.component.html',
    styleUrls:['edit.parent.component.css']
})

export class ParentEditComponent implements OnInit {

    PID:number
    s_id:number
    pfirstname:string
    plastname:string
    pmobile:string
    pemail:string
    paddress:string
    prelation:string

    constructor(private router:Router,private activateRoute: ActivatedRoute, private service : ParentService) 
    {
        const id = this.activateRoute.snapshot.params['PID']
        //console.log(id);
        this.service.getParentById(id).subscribe(response =>{
            if(response['status'] == 'success')
            {              
                const parent = response['data']
                console.log(response['data'])
                const p = parent['0']
                console.log(p);
                
                this.s_id  = p.S_ID
                this.pfirstname = p.PFIRSTNAME
                this.plastname = p.PLASTNAME
                this.pmobile = p.PMOBILE
                this.pemail = p.PEMAIL
                this.paddress = p.PADDRESS
                this.prelation = p.PRELATION
            }
        })
        
     }

     onUpdate()
     {
            console.log("Update Called");
            // this.service.function
            //     .subscribe(arg => this.property = arg);
                

    }

 

    ngOnInit() { }
}