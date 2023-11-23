import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {AboutComponent} from "./features/about/about.component";
import {ContactsComponent} from "./features/contacts/contacts.component";
import {JoinUsComponent} from "./features/join-us/join-us.component";

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'contacts',
    component : ContactsComponent
  },
  {
    path: 'join-us',
    component : JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
