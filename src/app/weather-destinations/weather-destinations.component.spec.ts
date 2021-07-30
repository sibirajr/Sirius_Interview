import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDestinationsComponent } from './weather-destinations.component';

describe('WeatherDestinationsComponent', () => {
  let component: WeatherDestinationsComponent;
  let fixture: ComponentFixture<WeatherDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
