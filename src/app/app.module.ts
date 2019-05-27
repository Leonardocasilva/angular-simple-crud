import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularyComponent } from './formulary/formulary.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormularyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [
    ListService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
