import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private users: UsersService) {}

  public searchTerm = '';

  public listOfUsers() {
    return this.users.getUsers();
  }

  public onAddNewUser() {
    this.users.addNewUser();
  }
}
