import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UserloginComponent } from './userlogin/userlogin.component';

 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    PagenotFoundComponent,
    AboutusComponent,
    AdminComponent,
    LoginComponent,
    ProductsComponent,
    UsersComponent,
    OrderComponent,
    CheckoutComponent,
    CreateComponent,
    DetailsComponent,
    UserordersComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
     
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
