import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from "@angular/router";

import { StudentListComponent } from './student/list/student.list.component';
import { StudentService } from './student/student.service';
import { StudentAddComponent } from './student/add/student.add.component';
import { StudentEditComponent } from './student/edit/edit.student.component';

import { UserLoginComponent } from './user/login/user.login.component';
import { UserService } from './user/user.service';
import { UserRegisterComponent } from './user/register/user.register.components';
import { UserListComponent } from './user/list/user.list.component';

import { ParentAddComponent } from './parent/add/parent.add.component';
import { ParentService } from './parent/parent.service';
import { ParentListComponent } from './parent/list/parent.list.component';
import { ParentEditComponent } from "./parent/edit/edit.parent.component";

import { HomeComponent } from './home/home.component';

import { FacultyListComponent } from './faculty/list/faculty.list.component';
import { FacultyService } from './faculty/faculty.service';
import { FacultyAddComponent } from './faculty/add/faculty.add.component';
import { FacultyEditComponent } from "./faculty/edit/edit.faculty.component";

import { ClientHomeComponent } from './client/client.home.component';


const route : Route[]=
[
  {path : 'students-list', component: StudentListComponent, canActivate:[UserService]},
  {path : 'students-add', component: StudentAddComponent, canActivate:[UserService]},
  {path : 'students-edit/:S_ID', component: StudentEditComponent, canActivate:[UserService]},

  {path : 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-list', component: UserListComponent, canActivate:[UserService]},
  
  

  {path : 'parent-list', component: ParentListComponent, canActivate:[UserService]},
  {path : 'parent-add', component:ParentAddComponent, canActivate:[UserService]},
  {path: 'parent-edit/:PID', component: ParentEditComponent, canActivate:[UserService]},

  {path: 'home', component:HomeComponent},

  {path: 'client-home', component:ClientHomeComponent},
  
  {path: 'faculty-list', component:FacultyListComponent, canActivate:[UserService]},
  {path: 'faculty-add', component:FacultyAddComponent, canActivate:[UserService]},
  {path: 'faculty-edit/:FID', component: FacultyEditComponent, canActivate:[UserService]},


]


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,

    
    UserLoginComponent,
    UserRegisterComponent,
    UserListComponent,

    ParentAddComponent,
    ParentListComponent,
    ParentEditComponent,

    FacultyListComponent,
    FacultyAddComponent,
    FacultyEditComponent,

    ClientHomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
        StudentService,
        UserService,
        ParentService,
        FacultyService,
        FacultyListComponent,
        ParentListComponent,
        StudentListComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
