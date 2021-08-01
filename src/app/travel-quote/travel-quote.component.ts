import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-travel-quote',
  templateUrl: './travel-quote.component.html',
  styleUrls: ['./travel-quote.component.scss']
})
export class TravelQuoteComponent implements OnInit {

  formSubmitted: boolean = false;

  quoteForm = this.fb.group({
    name: ['', Validators.required],
    contact: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmitQuoteDetails() {
    this.quoteForm.reset();
    this.formSubmitted = true;
  }

}
