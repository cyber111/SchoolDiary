import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent.service';
import * as toastr from "toastr";

@Component({
    selector: 'app-parent-add',
    templateUrl: 'parent.add.component.html',
    styleUrls: ['parent.add.component.css']
})

export class ParentAddComponent implements OnInit {

    s_id:number
    pfirstname:string
    plastname:string
    pmobile:string
    pemail:string
    paddress:string
    prelation:string

 


    constructor(private service: ParentService) { }

    onAdd(  s_id :number,
            pfirstname:string,
         plastname:string, pmobile:string,
         pemail:string, paddress:string, prelation:string
         )
    {
        this.service
        .addParent(s_id, pfirstname, plastname, pmobile, pemail, paddress, prelation)
        .subscribe(response => 
        {
            if(response['status'] == 'success')
            {
                toastr.success('Data Added')
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