import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDestinationsService {

  constructor(public http: HttpClient) {
  }

  fetchWeatherDetails(): Observable<any> {
    return this.http.get<any[]>('https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576')
  }

  fetchFeaturedDest(): Observable<any> {
    return this.http.get<any[]>('https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c')
  }
}
