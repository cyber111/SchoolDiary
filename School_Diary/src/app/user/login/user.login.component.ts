import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as toastr from "toastr";
import { Router } from '@angular/router';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
    selector: 'app-user-login',
    templateUrl: 'user.login.component.html',
    styleUrls:['user.login.component.css']
})

export class UserLoginComponent implements OnInit {
    username : string
    password : string
    constructor(private service : UserService, private router : Router) 
    { 
     
    }

    getUser()
    {
           
    }


    onLogin()
    {
            this.postUser(this.username, this.password)  
        
    }
    postUser(username : string, password:string)
    {
        this.service.postUser(username, password)
        .subscribe(response =>{

            console.log(response['status']);
            
            if(response['status'] == 'success')
            {
                this.router.navigate(['/students-list'])
                toastr.success('User Loged In')
                localStorage['login_status'] = '1'
            }
            else
            {
                toastr.error('User Not There')
            }
        })
    }

    ngOnInit() { }
}