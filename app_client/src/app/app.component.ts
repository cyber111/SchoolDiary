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


  constructor(private router: Router) {

  }

  toRender() {
    if (sessionStorage['login_status'] == 1)
      return true;
    else
      return false;
  }


  isStudent() {
    if (sessionStorage['role'] == 'student')
      return true
    else
      return false
  }

  isFaculty() {
    if (sessionStorage['role'] == 'faculty')
      return true
    else
      return false
  }

  isParent() {
    if (sessionStorage['role'] == 'parent')
      return true
    else
      return false
  }





  toRenderOne() {
    if (sessionStorage['isLogo'] == 1)
      return true;
    else
      return false;
  }

  onLogout() {
    sessionStorage.clear()
    this.router.navigate(['/home'])
    toastr.success(' Logged out ')
  }

  onLogin() {
    this.router.navigate(['/user-login'])
  }
}
