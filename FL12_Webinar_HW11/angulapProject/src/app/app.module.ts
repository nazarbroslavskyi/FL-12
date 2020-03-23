import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ResourseNotFoundComponent } from './components/resourse-not-found/resourse-not-found.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    FilterPipe,
    EditUserComponent,
    ResourseNotFoundComponent,
    ListOfUsersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
