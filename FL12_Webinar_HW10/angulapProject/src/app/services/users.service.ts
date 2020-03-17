import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id = 9;
  private listOfUsers = [
    {
      id: 1,
      name: 'Oleg',
      email: 'bnmstdkpi@gmail.com',
      phone: '0932421992',
      isEdit: false,
      isSaved: true
    },
    {
      id: 2,
      name: 'Petro',
      email: 'jackyechan@gmail.com',
      phone: '0560345034',
      isEdit: false,
      isSaved: true
    },
    {
      id: 3,
      name: 'Oksana',
      email: 'angrybirds@gmail.com',
      phone: '993939399339',
      isEdit: false,
      isSaved: true
    },
    {
      id: 4,
      name: 'Tomas',
      email: 'ferdinant@gmail.com',
      phone: '944589494994',
      isEdit: false,
      isSaved: true
    },
    {
      id: 5,
      name: 'Rudolf',
      email: 'gitler@gmail.com',
      phone: '3443535439485',
      isEdit: false,
      isSaved: true
    },
    {
      id: 6,
      name: 'Vasyl',
      email: 'drakulaofnight@gmail.com',
      phone: '66666666666',
      isEdit: false,
      isSaved: true
    },
    {
      id: 7,
      name: 'Andriy',
      email: 'fisherman@gmail.com',
      phone: '043234433439',
      isEdit: false,
      isSaved: true
    },
    {
      id: 8,
      name: 'Igor',
      email: 'likesmoking@gmail.com',
      phone: '0000000009',
      isEdit: false,
      isSaved: true
    }
  ];

  public getUsers(): Array<object> {
    return this.listOfUsers;
  }

  public deleteUser(id: number): void {
    const index = this.listOfUsers.findIndex(el => el.id === id);
    this.listOfUsers.splice(index, 1);
  }

  public saveUserInfo(id: number, userInfo) {
    this.listOfUsers = this.listOfUsers.map(item =>
      item.id === id ? { id, ...userInfo, isEdit: false, isSaved: true } : item
    );
    console.log(this.listOfUsers);
  }

  public addNewUser() {
    this.listOfUsers.unshift({
      id: this.id,
      name: '',
      phone: '',
      email: '',
      isEdit: true,
      isSaved: false
    });
    this.id++;
  }

  public editEnabled(id: number) {
    const index = this.listOfUsers.findIndex(el => el.id === id);
    return (this.listOfUsers[index].isEdit = true);
  }

  public editDisabled(id: number) {
    const index = this.listOfUsers.findIndex(el => el.id === id);
    return (this.listOfUsers[index].isEdit = false);
  }
}
