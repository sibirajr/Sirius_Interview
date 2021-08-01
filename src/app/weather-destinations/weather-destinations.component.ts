import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherDestinationsService } from './weather-destinations.service';

@Component({
  selector: 'app-weather-destinations',
  templateUrl: './weather-destinations.component.html',
  styleUrls: ['./weather-destinations.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class WeatherDestinationsComponent implements OnInit {


  weatherDetails;
  featuredDest;

  constructor(
    public weatherDestService: WeatherDestinationsService,
  ) { }

  ngOnInit(): void {
    this.getWeather();
    this.getFeaDest()
  }

  getWeather() {
    this.weatherDestService.fetchWeatherDetails().subscribe((res) => {
      this.weatherDetails = res.result
    })
  }

  getFeaDest() {
    this.weatherDestService.fetchFeaturedDest().subscribe((res) => {
      console.log(res)
      this.featuredDest = res.result
    })
  }
}
