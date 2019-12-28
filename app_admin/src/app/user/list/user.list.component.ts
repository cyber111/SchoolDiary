import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as toastr from "toastr";
@Component({
    selector: 'app-user-list',
    templateUrl: 'user.list.component.html',
    styleUrls:['user.list.component.css']
})

export class UserListComponent implements OnInit {
    id = 0
    
    users = []
    constructor(private service: UserService) 
    { 
        this.getUser()
    }

    getUser()
    {
        this.service.getUser()
        .subscribe(response => {
            {
                console.log(response['data']);
                
                if (response['status'] == 'success')
                {
                    this.users = response['data']     
                }
                else
                {
                    toastr.error('ERROR')    
                }
             }
        })
    }

    onBlock(id: number)
    {
        this.service.blockUser(id)
        .subscribe(response =>
        {
            console.log(response['data']);
                
            if (response['status'] == 'success')
            {
                this.users = response['data']     
                toastr.success('User Blocked')  
            }
            else
            {
                toastr.error('ERROR')    
            }
        })
    }  

    onUnBlock(id:number)
    {
        this.service.unBlockUser(id)
        .subscribe(response =>
        {
            console.log(response['data']);
                
            if (response['status'] == 'success')
            {
                this.users = response['data']
                toastr.success('User unblocked')  
                   
            }
            else
            {    
                toastr.error('Error')     
            }
        })
    }

    onDelete(id:number)
    {
        
        
        this.service.deleteUser(id)
        .subscribe(response =>
        {
            console.log(response['data']);
                
            if (response['status'] == 'success')
            {
                this.users = response['data']
                this.getUser()
                toastr.success('User Deleted')  
                   
            }
            else
            {    
                toastr.error('Error')     
            }
        })
    }
    ngOnInit() { }
}