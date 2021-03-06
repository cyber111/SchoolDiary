import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserService implements CanActivate{
    

    url = ' http://localhost:5000/user'
    
    constructor(
        private httpClient: HttpClient,
        private router : Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(localStorage['login_status'])
            return true
            this.router.navigate(['/user-login'])
            return false
    } 
    
    getUsers()
    {
        return this.httpClient.get('url')
    }

    registerUser(username: string, password:string, email:string,role:string)
    {
        const body = 
        {
            username:username,
            password : password,
            email:email,
            role:role

        }
        console.log(body)

        return this.httpClient.post(this.url+'/register', body)
    }

    //postUser = Register user
    postUser(username: string, password: string) 
    {
        const body = 
        {
            username : username,
            password :password,
            
        }
        return this.httpClient.post(this.url + '/login', body)
    }
    
    postAdmin(username: string, password: string) 
    {
        const body = 
        {
            username : username,
            password :password
        }
        return this.httpClient.post(this.url + '/Admin' + '/login', body)
    }


    getUser() 
    {
        return this.httpClient.get(this.url)
    }

    blockUser(id: number)
    {
        const body = {}
        return this.httpClient.post(this.url + '/Admin/block/' + id, body)
    }

    unBlockUser(id : number)
    {
        const body = {}
        return this.httpClient.post(this.url + '/Admin/unblock/' + id, body)
    }


    getId(username:string)
    {
        return this.httpClient.get(this.url + '/ID/' + username)
    }


    deleteUser(id: number)
    {
        return this.httpClient.post(this.url + "/Admin/delete/" + id, {})
    }
}