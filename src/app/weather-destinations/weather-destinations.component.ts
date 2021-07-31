import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherDestinationsService } from './weather-destinations.service';

@Component({
  selector: 'app-weather-destinations',
  templateUrl: './weather-destinations.component.html',
  styleUrls: ['./weather-destinations.component.scss']
})
export class WeatherDestinationsComponent implements OnInit {


  displayTimer: string;
  weatherDetails;
  featuredDest;

  quoteForm = this.fb.group({
    name: ['', Validators.required],
    contact: ['', Validators.required, Validators.email],
    email: ['', Validators.required, Validators.pattern('[- +()0-9]+')]
  });

  constructor(
    public weatherDestService: WeatherDestinationsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.calculateDisplayTimer();

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

  calculateDisplayTimer() {
    var countDownDate = new Date("Aug 8, 2021 18:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(() => {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      this.displayTimer = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        this.displayTimer = "EXPIRED";
      }
    }, 1000);
  }

  onSubmitQuoteDetails(){

  }

}
