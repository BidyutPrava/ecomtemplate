import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cols: any = 6;
  tiles = [
    {text: 'One', cols: 2, rows: 1, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 1, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 2, color: '#FF0000'},
    {text: 'Four', cols: 3, rows: 1, color: '#D9EDD9'},
    {text: 'One', cols: 2, rows: 1, color: '#142A5C'},
    {text: 'Two', cols: 1, rows: 1, color: '#B7A0E8'},
    {text: 'Three', cols: 1, rows: 2, color: '#FF0000'},
    {text: 'Four', cols: 3, rows: 1, color: '#D9EDD9'},
  ];
  constructor() { }

  ngOnInit() {
  }

  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);


    if (element < 950) {
      this.cols = 3;
    }

    if (element > 950) {
      this.cols = 6;
    }

    if (element < 750) {
      this.cols = 1;
    }
  }

}
