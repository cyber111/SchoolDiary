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

  onLogout()
  {
    if(localStorage['login_status'] == 1)
    {
      localStorage.removeItem('login_status')
      this.router.navigate(['/home'])
      toastr.success(' Logged out ')
    }
    else
      toastr.error('Already Logged out ')
  }

  onLogin()
  {
    if(localStorage['login_status'] == 1)
    {

    }
    else
    {


    }
  }
}
