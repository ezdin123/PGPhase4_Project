import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { ProductsComponent } from './products/products.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'create', component:CreateComponent},
  { path: 'users', component:UsersComponent},
  { path: 'checkout', component:CheckoutComponent},
  { path: 'userorders', component:UserordersComponent},
  { path:'products/details/:id' , component:DetailsComponent },
  { path: 'order/:uname', component:OrderComponent},
  { path: 'userlogin', component:UserloginComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: '**', component:PagenotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
