import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //landing 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // also define dynamic values in the hmtl files like title= 'Pllnr'
  title = 'Plnnr';
  text = 'Click Me yuuuurd';
  constructor(/*get*/) {

  }
  // functions after constructor
  ngOnInit() {
    // simple initialize func
    console.log('App innnnnit');
  }

  countClicks() {
    console.log('button has been clicked yuuurd');
  }

}