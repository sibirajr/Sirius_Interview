import { TestBed } from '@angular/core/testing';

import { WeatherDestinationsService } from './weather-destinations.service';

describe('WeatherDestinationsService', () => {
  let service: WeatherDestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDestinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
