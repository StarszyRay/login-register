import {Component, NgZone, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from 'firebase';
import * as firebase from '../email/email.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public user: User;

  constructor(public afAuth: AngularFireAuth,
              private router: Router) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}

