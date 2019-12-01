import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent.service';
import * as toastr from "toastr";
import { ParentListComponent } from '../list/parent.list.component';
import { Router } from '@angular/router';

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
    constructor(private service: ParentService, private list : ParentListComponent, private router: Router) { }

    onAdd( )
    {
        this.service
        .addParent(this.s_id, this.pfirstname, this.plastname, this.pmobile, this.pemail, this.paddress, this.prelation)
        .subscribe(response => 
        {
            if(response['status'] == 'success')
            {
                toastr.success('Data Added')
                
                this.list.showList()
            }
            else
            {
                console.log(response['error'])
                toastr.error('ErrorErrorError')
            }
            this.router.navigate(['/parent-list'])
        })
        
    }

    ngOnInit() { }
}