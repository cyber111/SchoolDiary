import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent.service';
import * as toastr from "toastr";

@Component({
    selector: 'app-parent-list',
    templateUrl: 'parent.list.component.html',
    styleUrls: ['parent.list.component.css']
})

export class ParentListComponent implements OnInit {
    parents : []
    constructor(private service: ParentService)
     {
        this.showList()
     }

     showList()
     {
         this.service.getParent()
         .subscribe(response => {
            if (response['status'] == 'success')
            {
                this.parents = response['data']     
            }
            else
            {
                toastr.error('ERROR')    
            }
         })
     }

    ngOnInit() { }
}