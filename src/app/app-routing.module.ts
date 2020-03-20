import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/sign-up/signup.component';
import { OcurrenceFormComponent } from './main/form/ocurrence-form.component';
import { OcurrenceListComponent } from './main/list/ocurrence-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ocorrencia', children: [
    {path: 'form', component: OcurrenceFormComponent},
    {path: 'form/:id', component: OcurrenceFormComponent},
    {path: 'list', component: OcurrenceListComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
