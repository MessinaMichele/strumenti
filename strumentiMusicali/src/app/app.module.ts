import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { SpartitiComponent } from './spartiti/spartiti.component';
import { StrumentiComponent } from './strumenti/strumenti.component';

@NgModule({
  declarations: [
    AppComponent,
    BenvenutoComponent,
    SpartitiComponent,
    StrumentiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

