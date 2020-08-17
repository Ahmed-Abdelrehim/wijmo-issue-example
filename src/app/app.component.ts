import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wijmo-test';
  date
  hour
  min
  sec
  ngOnInit(){
    setInterval(() => {

      this.date = new Date(); /* creating object of Date class */
      this.hour = this.date.getHours();
      this.min = this.date.getMinutes();
      this.sec = ((10 - this.date.getSeconds()) > 0)? '0'+this.date.getSeconds() : this.date.getSeconds();
    },1000)
  }
}
