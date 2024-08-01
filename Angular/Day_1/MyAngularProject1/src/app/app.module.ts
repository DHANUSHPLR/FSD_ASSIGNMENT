import { NgModule } from '@angular/core';3
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CalculatorService } from './calculator.service';
// import { RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path : 'home' ,component : HomeComponent},
  { path : 'contact' ,component : ContactComponent},
  { path : 'about' ,component : AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


