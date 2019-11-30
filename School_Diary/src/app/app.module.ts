import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/list/student.list.component';
import { StudentService } from './student/student.service';
import {  HttpClientModule } from '@angular/common/http';
import { StudentAddComponent } from './student/add/student.add.component';
import { RouterModule, Route } from "@angular/router";
import { UserLoginComponent } from './user/login/user.login.component';
import { UserService } from './user/user.service';
import { UserRegisterComponent } from './user/register/user.register.components';
import { ParentAddComponent } from './parent/add/parent.add.component';
import { ParentService } from './parent/parent.service';
import { ParentListComponent } from './parent/list/parent.list.component';
import { HomeComponent } from './home/home.component';
import { FacultyListComponent } from './faculty/list/faculty.list.component';
import { FacultyService } from './faculty/faculty.service';
import { FacultyAddComponent } from './faculty/add/faculty.add.component';

const route : Route[]=
[
  {path : 'students-list', component: StudentListComponent, canActivate:[UserService]},
  {path : 'students-add', component: StudentAddComponent, canActivate:[UserService]},

  {path : 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},

  {path : 'parent-list', component: ParentListComponent, canActivate:[UserService]},
  {path : 'parent-add', component:ParentAddComponent, canActivate:[UserService]},

  {path: 'home', component:HomeComponent},

  {path: 'faculty-list', component:FacultyListComponent, canActivate:[UserService]},
  {path: 'faculty-add', component:FacultyAddComponent, canActivate:[UserService]}


]


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    StudentListComponent,
    StudentAddComponent,
    
    UserLoginComponent,
    UserRegisterComponent,

    ParentAddComponent,
    ParentListComponent,

    FacultyListComponent,
    FacultyAddComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [StudentService,
         UserService,
        ParentService,
        FacultyService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
