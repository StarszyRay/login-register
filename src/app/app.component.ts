import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})


export class AppComponent {
  title = 'Simple login & register project';
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/member']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
