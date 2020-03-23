import { ResourseNotFoundComponent } from './components/resourse-not-found/resourse-not-found.component';
import { AppComponent } from './app.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListOfUsersComponent },
  { path: 'users/new', component: EditUserComponent },
  { path: 'users/:id', component: EditUserComponent },
  { path: '**', component: ResourseNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
