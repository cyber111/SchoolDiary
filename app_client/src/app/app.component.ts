import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from "toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private router: Router)
  {
      
  }

  toRender()
  {
    if(localStorage['login_status'] == 1)
      return true;
    else
      return false;  
  }

  onLogout()
  {
    if(localStorage['login_status'] == 1)
    {
      
      localStorage.removeItem('login_status')
      localStorage['log_out_flag'] = 1;
      this.router.navigate(['/home'])
      toastr.success(' Logged out ')
    }
    else
      toastr.error('Already Logged out ')
  }

  isLogOut()
  {
    if(localStorage['log_out_flag'] == 1)
    return true;
  else  if(localStorage['log_out_flag'] == 0)
    return false; 
  }

  onLogin()
  {
    if(!localStorage['login_status'])
    {
      
      this.router.navigate(['/user-login'])
    }
    else
    {
      toastr.error('Already Logged in')

    }
  }
}
