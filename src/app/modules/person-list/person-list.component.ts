import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';
import {IPerson} from '../../interfaces/person';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  public people = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getPeopleData2().subscribe(data => this.people = data);
    console.log(this.people);
  }

}
