import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.scss']
})
export class CompanyHeaderComponent implements OnInit {

  displayTimer: string;
  interval;

  constructor() { }

  ngOnInit(): void {
    this.calculateDisplayTimer();
  }

  calculateDisplayTimer() {
    var countDownDate = new Date("Aug 8, 2021 18:00:00").getTime();
    // Update the count down every 1 second
    this.interval = setInterval(() => {

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
        clearInterval(this.interval);
        this.displayTimer = "EXPIRED";
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
