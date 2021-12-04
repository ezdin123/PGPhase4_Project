import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'login', component:LoginComponent},
  {path: 'welcome',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'logout',component:LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'customers', component:ListCustomersComponent, canActivate:[RouteGuardService] },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
