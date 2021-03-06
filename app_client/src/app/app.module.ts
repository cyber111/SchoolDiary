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
import { StudentEditComponent } from './student/edit/edit.student.component';
import { ClientHomeComponent } from './client/client.home.component';
import { UserListComponent } from './user/list/user.list.component';
import { StuedentHomeComponent } from './student/home/add/student.from.component';
import { StudentProfileComponent } from './student-home/profile/student.profile.component';
import { FacultyProfileComponent } from './faculty/home/profile/faculty.profile.component';
import { FacultyNoticeComponent } from './faculty/notice/faculty.notice.component';
import { FacultyTestComponent } from './faculty/test/faculty.test.component';
import { StudentSubjectComponent } from "./student/subject/student.subject.component";
import { StudentTestComponent } from './student/test/student.test.component';
import { StudentFeedbackComponent } from './student/feedback/student.feedback.component';
import { StudentDashboardComponent } from './student/dashboard/student.dashboard.component';
import { FacultySubjectComponent } from "./faculty/subject/faculty.subject.component";
import { FacultyClassesComponent } from "./faculty/classes/faculty.classes.component";
import { FacultySchduleComponent } from "./faculty/schedule/faculty.schedule.component";
import { FacultyNewSchduleComponent } from "./faculty/schedule/newSchedule/faculty.newSchedule.component";
import { FacultyNewTestComponent } from "./faculty/test/newTest/faculty.newTest.component";
import { FacultyQuestionComponent } from './faculty/test/question/list/faculty.question.component';
import { FacultyNewQuestionComponent } from './faculty/test/question/newQuestion/faculty.newQuestion.component';
import { StudentAttemptComponent } from './student/test/attempt/student.attempt.component';
import { StudentRemarkComponent } from './student/list/remark/student.remark.component';
import { StudentNewRemarkComponent } from "./student/list/remark/newRemark/student.NewRemark.component";


const route : Route[]=
[
  {path : 'students-list', component: StudentListComponent},
  {path : 'students-add', component: StudentAddComponent},
  {path : 'students-edit/:S_ID', component: StudentEditComponent},
  {path: 'students-profile', component:StudentProfileComponent},
  {path: 'students-subject', component:StudentSubjectComponent},  
  {path: 'students-test', component:StudentTestComponent},
  {path: 'students-feedback', component:StudentFeedbackComponent},
  {path: 'students-dashboard', component:StudentDashboardComponent},
  {path: 'students-attempt', component:StudentAttemptComponent},
  {path: 'students-remark', component:StudentRemarkComponent},
  {path: 'students-newremark', component:StudentNewRemarkComponent},
  
  
  
  
  {path : 'user-register', component: UserRegisterComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-list', component: UserListComponent, canActivate:[UserService]},

  {path : 'parent-list', component: ParentListComponent, canActivate:[UserService]},
  {path : 'parent-add', component:ParentAddComponent, canActivate:[UserService]},

  {path: 'home', component:HomeComponent},

  {path: 'client-home', component:ClientHomeComponent},
  
  {path: 'faculty-list', component:FacultyListComponent, canActivate:[UserService]},
  {path: 'faculty-add', component:FacultyAddComponent, canActivate:[UserService]},
  {path: 'faculty-profile', component:FacultyProfileComponent, canActivate:[UserService]},
  {path: 'faculty-notice', component:FacultyNoticeComponent, canActivate:[UserService]},
  {path: 'faculty-test', component:FacultyTestComponent, canActivate:[UserService]},
  // {path: 'faculty-dashboard', component:FacultyDashboardComponent, canActivate:[UserService]},
  {path: 'faculty-subject', component:FacultySubjectComponent, canActivate:[UserService]},
  {path: 'faculty-classes', component:FacultyClassesComponent, canActivate:[UserService]},
  {path: 'faculty-schedule', component:FacultySchduleComponent, canActivate:[UserService]},
  {path: 'faculty-newschedule', component:FacultyNewSchduleComponent, canActivate:[UserService]},
  {path: 'faculty-newtest', component:FacultyNewTestComponent, canActivate:[UserService]},
  {path: 'faculty-question', component:FacultyQuestionComponent, canActivate:[UserService]},
  {path: 'faculty-newquestion', component:FacultyNewQuestionComponent, canActivate:[UserService]}
]
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StuedentHomeComponent,
    StudentProfileComponent,
    StudentSubjectComponent,
    StudentTestComponent,
    StudentFeedbackComponent,
    StudentDashboardComponent,
    StudentAttemptComponent,
    StudentRemarkComponent,
    StudentNewRemarkComponent,
    
    

    
    UserLoginComponent,
    UserRegisterComponent,
    UserListComponent,

    ParentAddComponent,
    ParentListComponent,

    FacultyListComponent,
    FacultyAddComponent,
    FacultyProfileComponent,
    FacultyNoticeComponent,
    FacultyTestComponent,
    // FacultyDashboardComponent,
    FacultySubjectComponent,
    FacultyClassesComponent,
    FacultySchduleComponent,
    FacultyNewSchduleComponent,
    FacultyNewTestComponent,
    FacultyQuestionComponent,
    FacultyNewQuestionComponent,

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
        StudentListComponent,
        FacultyClassesComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
