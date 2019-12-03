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
    if (localStorage['login_status'] == 1)
      return true;
    else
      return false;
  }

  toRenderOne() {
    if (localStorage['isLogo'] == 1)
      return true;
    else
      return false;
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/home'])
    toastr.success(' Logged out ')
  }

  onLogin() {
    this.router.navigate(['/user-login'])
  }
}
