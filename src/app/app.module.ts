import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { DataPanelComponent } from './page-components/data-panel/data-panel.component';

import { ApiService } from './service/api/api.service';
import { SideNavbarComponent } from './side-navbar/side-navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopNavbarComponent,
    DataPanelComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
