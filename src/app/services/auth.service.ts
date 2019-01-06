import {User} from 'firebase';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {
  private currUser: User;

  public userModel = new BehaviorSubject<User>({} as User);
  public userModelChange = this.userModel.asObservable();

}
