import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() userInfo;
  @Output() refreshUsers = new EventEmitter();

  public isEditEnabled: boolean;
  public userForm: FormGroup;

  constructor(private users: UsersService, private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [this.userInfo.name, [Validators.required]],
      email: [this.userInfo.email, [Validators.required, Validators.email]],
      phone: [this.userInfo.phone, [Validators.required]]
    });
    this.isEditEnabled = this.userInfo.isEdit;
  }

  public onDelete(id: number) {
    this.users.deleteUser(id).subscribe(_ => this.refreshUsers.emit());
  }
}
