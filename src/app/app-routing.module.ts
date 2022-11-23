import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './questions/pages/add-question/add-question.component';
import { AddAnswerComponent } from './answers/pages/add-answer/add-answer.component';
import { SearchQuestionComponent } from './questions/pages/search-question/search-question.component';
import { HomeComponent } from './users/pages/home/home.component';
import { ProfileComponent } from './users/pages/profile/profile.component';
import { SignInComponent } from "./public/sign-in/sign-in.component";
import {SignUpComponent} from "./public/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./public/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./users/pages/change-password/change-password.component";
import {NotFoundComponent} from "./public/not-found/not-found.component";
import {RankingComponent} from "./users/pages/ranking/ranking.component";
import {EditProfileComponent} from "./users/pages/profile/edit-profile/edit-profile.component";


const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'add-question',
    component: AddQuestionComponent},
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path: 'edit-question',
    pathMatch: "full",
    redirectTo: 'add-question'
  },
  {
    path: 'edit-question/:questionId',
    component: AddQuestionComponent
  },
  {
    path: 'search',
    component: SearchQuestionComponent
  },
  {
    path:'search/:keyword',
    component: SearchQuestionComponent
  },
  {
    path: 'course',
    pathMatch: "full",
    redirectTo: 'home'
  },
  {
    path: 'course/:courseId',
    component: SearchQuestionComponent
  },
  {
    path: 'course/:courseId/search',
    pathMatch: "full",
    redirectTo: 'course/:courseId'
  },
  {
    path: 'course/:courseId/search/:keyword',
    component: SearchQuestionComponent
  },
  {
    path:'question/:questionId/add-answer',
    component: AddAnswerComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: "full",
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
