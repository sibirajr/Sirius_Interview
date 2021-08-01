import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelQuoteComponent } from './travel-quote.component';

describe('TravelQuoteComponent', () => {
  let component: TravelQuoteComponent;
  let fixture: ComponentFixture<TravelQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
