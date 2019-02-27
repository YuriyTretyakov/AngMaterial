import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import {ProductsService} from './products.service';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrenttrainingComponent } from './training/currenttraining/currenttraining.component';
import { NewtrainingComponent } from './training/newtraining/newtraining.component';
import { PasttrainingComponent } from './training/pasttraining/pasttraining.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {StopTrainingComponent} from './training/currenttraining/stop-training-component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrenttrainingComponent,
    NewtrainingComponent,
    PasttrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers:[AuthService,TrainingService],
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
