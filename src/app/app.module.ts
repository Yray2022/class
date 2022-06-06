import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClassRomComponent } from './components/class-rom/class-rom.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassRomComponent,
    HomeComponent,
    NotFoundComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
