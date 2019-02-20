import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPerson} from '../interfaces/person';
import {Observable} from 'rxjs';

@Injectable()
export class TestService {

  private dataUrl = 'http://localhost:3000/people';
  constructor(private http: HttpClient) { }

  getPeopleData1() {
    return [
      {'id': 1, 'name': 'Andrew', 'age': 30},
      {'id': 2, 'name': 'Brandon', 'age': 25},
      {'id': 3, 'name': 'Christina', 'age': 26},
      {'id': 4, 'name': 'Elena', 'age': 28}
    ];
  }
  getPeopleData2(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.dataUrl);
  }
}
