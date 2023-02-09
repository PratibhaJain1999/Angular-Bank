import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { Router, RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  { path:'', component:BankListComponent},
  { path:'bank-details/:id', component:BankDetailsComponent},
  { path:'**', component:AppComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    BankDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
