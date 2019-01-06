import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './email/email.component';
import { MemberComponent } from './member/member.component';
import { ModuleWithProviders } from '@angular/core';

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
