import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherDestinationsComponent } from './weather-destinations/weather-destinations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelQuoteComponent } from './travel-quote/travel-quote.component';
import { CompanyFooterComponent } from './company-footer/company-footer.component';
import { CompanyHeaderComponent } from './company-header/company-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDestinationsComponent,
    TravelQuoteComponent,
    CompanyFooterComponent,
    CompanyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
