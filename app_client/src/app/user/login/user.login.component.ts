import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as toastr from "toastr";
import { Router } from '@angular/router';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
    selector: 'app-user-login',
    templateUrl: 'user.login.component.html',
    styleUrls: ['user.login.component.css']
})

export class UserLoginComponent implements OnInit {

    username: string
    password: string
    roll: any
    uid: number
    is_block: number
    user_roll: string



    constructor(private service: UserService, private router: Router) {

    }



    onLogin() {
        this.postUser(this.username, this.password)
        
    }
    postUser(username: string, password: string) {
        this.service.postUser(username, password)
            .subscribe(response => {



                if (response['status'] == 'success') {

                    const data = response['data']
                    if (data['is_block'] == 0) {
                        sessionStorage['uid'] = data['id']
                        // console.log(sessionStorage['student_uid']);

                        if (data['role'] == 'student') {
                            sessionStorage['role'] = data['role']

                            this.router.navigate(['/client-home'])
                            toastr.success('User Loged In')
                            sessionStorage['login_status'] = '1'
                            // sessionStorage['student_uid'] = data['uid']
                        }
                        else if (data['role'] == 'faculty') {
                            sessionStorage['role'] = data['role']
                            this.router.navigate(['/client-home'])
                            toastr.success('User Loged In')
                            sessionStorage['login_status'] = '1'
                        }
                        else if (data['role'] == 'parent') {
                            sessionStorage['role'] = data['role']
                            this.router.navigate(['/client-home'])
                            toastr.success('User Loged In')
                            sessionStorage['login_status'] = '1'
                        }
                    }
                    else
                        toastr.error('User is block')


                } else
                    toastr.error('User Not There')
            })
    }
    postAdmin(username: string, password: string) {
        this.service.postAdmin(username, password)
            .subscribe(response => {

                console.log(response['status']);

                if (response['status'] == 'success') {
                    this.router.navigate(['/students-list'])
                    toastr.success('User Loged In')
                    sessionStorage['login_status'] = '1'
                }
                else {
                    toastr.error('User Not There')
                }
            })
    }

    getId() {
        this.service.getId(this.username)
            .subscribe
    }

    ngOnInit() { }
}