import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { routes } from './app-routing.module';
import {ServiceModule} from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmailComponent,
    LoginComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'login-register'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
