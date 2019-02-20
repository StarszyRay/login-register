import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './modules/register/register.component';
import { EmailComponent } from './modules/email/email.component';
import { LoginComponent } from './modules/login/login.component';
import { MemberComponent } from './modules/member/member.component';
import { routes } from './app-routing.module';
import {ServiceModule} from './services/service.module';
import {TestService} from './services/test.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonListComponent } from './modules/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmailComponent,
    LoginComponent,
    MemberComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'login-register'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    routes,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
