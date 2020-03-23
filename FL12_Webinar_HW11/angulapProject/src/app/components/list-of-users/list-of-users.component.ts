import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { fromEvent, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {
  @ViewChild('searchInput', { static: true })
  public searchInput: ElementRef;
  public searchTerm = '';
  public dataLoaded = false;
  public userList: any = [];

  constructor(private users: UsersService) {}

  ngOnInit() {
    this.users.getUsers().subscribe(data => {
      this.userList = data;
      this.dataLoaded = true;
    });

    const source = fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          if (value !== '') {
            return this.users.findUser(value);
          } else {
            return this.users.getUsers();
          }
        })
      )
      .subscribe(item => (this.userList = item));
  }

  public listOfUsers() {}

  public fetchUpdatedUsers() {
    this.dataLoaded = false;
    this.users.getUsers().subscribe(data => {
      this.userList = data;
      this.dataLoaded = true;
    });
  }
}
