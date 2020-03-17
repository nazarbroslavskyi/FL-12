import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() userInfo;

  constructor(private users: UsersService, private fb: FormBuilder) { }

  public isEditEnabled: boolean;
  public userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [this.userInfo.name, [Validators.required]],
      email: [this.userInfo.email, [Validators.required, Validators.email]],
      phone: [this.userInfo.phone, [Validators.required]]
    });
    this.isEditEnabled = this.userInfo.isEdit;
  }

  public onDelete(id: number) {
    console.log('delete');
    this.users.deleteUser(id);
  }

  public onEditInfo(id: number) {
    this.isEditEnabled =  this.users.editEnabled(id);
  }

  public onSaveInfo(id: number) {
    // this.isEditEnabled =use false;
    console.log(this.userForm);
    this.isEditEnabled =  this.users.editDisabled(id);
    console.log(this.isEditEnabled);
    console.log(this.userForm);
    this.users.saveUserInfo(id, this.userForm.value);
  }

  public onDiscardChanges(id: number) {
    console.log('discard');
    this.isEditEnabled =  this.users.editDisabled(id);
    console.log(this.isEditEnabled);
    if (!this.userInfo.isSaved) {
      this.users.deleteUser(id);
    }

  }
}
