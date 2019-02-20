import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { EmailComponent } from './modules/email/email.component';
import { MemberComponent } from './modules/member/member.component';
import { ModuleWithProviders } from '@angular/core';
import {PersonListComponent} from './modules/person-list/person-list.component';

const router: Routes = [
  { path: '', component: LoginComponent },
  { path: 'email', component: EmailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'member', component: MemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
