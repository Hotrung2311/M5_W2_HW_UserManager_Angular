import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/user-list/user-list.component";
import {SearchInputComponent} from "./search-input/search-input.component";


const routes: Routes = [
  {path: 'test-rout', component: UserListComponent},
  {path: 'abc', component: SearchInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
