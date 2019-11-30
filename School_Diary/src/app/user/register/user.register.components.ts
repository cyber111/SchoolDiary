import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
@Component({
    selector: 'app-user-register',
    templateUrl: 'user.register.components.html',
    styleUrls: ['user.register.components.css']
})

export class UserRegisterComponent implements OnInit {

    username: ''
    password: ''
    email : ''



    constructor(private service: UserService, private router : Router)
         { 

         }

    onRegister()
    {
        console.log(this.username + this.password + this.email);
        this.service.registerUser(this.username, this.password, this.email)
        .subscribe(response => 
        {
            if(response['status'] = 'success')
            {
                alert('User added succesfully')
            }
            else
            {
                alert('ERROR')
            }
        this.router.navigate(['/user-login'])
        })
    }





    ngOnInit() { }
}