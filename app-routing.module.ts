import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Userstock } from './users/marketCap.model';
import { UsersComponent } from './users/users.component';
import { UserstockComponent } from './userstock/userstock.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'login', component:LoginComponent},
  { path: 'users', component: UsersComponent },
  {path:'userstock',component:UserstockComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
