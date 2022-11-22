import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './users/pages/home/heading/heading.component';
import { SideCoursesComponent } from './courses/pages/side-courses/side-courses.component';
import { ProfileComponent } from './users/pages/profile/profile.component';
import { AddQuestionComponent } from './questions/pages/add-question/add-question.component';
import { HomeComponent } from './users/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './courses/pages/add-course/add-course.component';
import { SideProfileComponent } from './users/pages/home/side-profile/side-profile.component.';
import { SearchQuestionComponent } from './questions/pages/search-question/search-question.component';
import { AddAnswerComponent } from './answers/pages/add-answer/add-answer.component';



import {CustomAsyncValidatorDirective} from "./shared/directives/custom-async-validator.directive";
import {CustomValidatorDirective} from "./shared/directives/custom-validator.directive";
import { SignInComponent } from './public/sign-in/sign-in.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {ForgotPasswordComponent} from "./public/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./users/pages/change-password/change-password.component";
import {NotFoundComponent} from "./public/not-found/not-found.component";
import { RankingComponent } from './users/pages/ranking/ranking.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { EditProfileComponent } from './users/pages/profile/edit-profile/edit-profile.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ShowQuestionsComponent } from './questions/pages/show-questions/show-questions.component';
import {MatSelectModule} from "@angular/material/select";
import { NothingForDisplayComponent } from './shared/components/nothing-for-display/nothing-for-display.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SideCoursesComponent,
    ProfileComponent,
    AddQuestionComponent,
    HomeComponent,
    AddCourseComponent,
    SideProfileComponent,
    SearchQuestionComponent,
    AddAnswerComponent,
    CustomAsyncValidatorDirective,
    CustomValidatorDirective,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    NotFoundComponent,
    RankingComponent,
    EditProfileComponent,
    ShowQuestionsComponent,
    NothingForDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
