import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public user: any;
  public editMode: boolean;
  public userId = this.route.snapshot.paramMap.get('id');
  public userForm: FormGroup;

  constructor(
    private users: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: [''],
      website: ['']
    });

    const userId = this.route.snapshot.paramMap.get('id');
    this.editMode = userId ? true : false;
    if (userId) {
      this.users.getSpecificUser(userId).subscribe(data => {
        this.user = data;
        this.userForm.setValue({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          website: data.website
        });
      });
    }
  }

  public onSaveInfo() {
    this.user = {
      ...this.user,
      address: { ...this.user.address, geo: { ...this.user.address.geo } },
      company: { ...this.user.company },
      ...this.userForm.value
    };

    this.users.updateUserInfo(this.userId, this.user).subscribe(data => {
      this.router.navigate(['/users']);
    });
  }

  onCreateUser() {
    this.users.addNewUser(this.userForm.value).subscribe(
      _ => {
        this.router.navigate(['/users']);
      },
      err => console.log('somethig wet wrong')
    );
  }
}
