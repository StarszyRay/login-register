import {Component, NgZone, OnInit} from '@angular/core';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router, private zone: NgZone) {
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider()).then(
      (success) => {
        this.zone.run(() =>
          this.router.navigate(['/member'])
        );
      }).catch(
      (err) => {
        console.log(err);
        // this.afAuth.auth.signOut();
        this.zone.run(() =>
          this.router.navigate(['/'])
        );
      });
  }

  loginAnonymously() {
    this.afAuth.auth.signInAnonymously().then(
      (success) => {
        this.router.navigate(['/member']);
      }).catch(
      (err) => {
        console.log(err);
        // this.afAuth.auth.signOut();
        this.router.navigate(['/']);
      });
  }

  ngOnInit() {
  }

}
