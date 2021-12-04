import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { RouteGuardService } from './services/route-guard.service';
import { HardcodedAuthenticationService } from './services/hardcoded-authentication.service';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RouteGuardService,HardcodedAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
