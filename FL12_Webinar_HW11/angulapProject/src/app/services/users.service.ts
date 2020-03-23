import { ApiService } from './api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private uniqID = 'id' + (new Date()).getTime();

  constructor(private api: ApiService) {}

  public getUsers() {
   return this.api.get('users');
  }

  public findUser(inputValue: string) {
    console.log(inputValue);
    return this.api.get(`users?name=${inputValue}`);
  }

  public getSpecificUser(id: string) {
    return this.api.get(`users/${id}`);
  }

  public deleteUser(id: number) {
    return this.api.delete(`users/${id}`);
  }

  public updateUserInfo(id: string, data: any) {
    return this.api.put(`users/${id}`, data);
  }

  public addNewUser(data) {
    return this.api.post(`users/`, { id: this.uniqID, ...data });
  }
}
