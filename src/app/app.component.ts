import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cafecremekalamboli';

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  constructor() { }

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const endDate = new Date('2023-12-10T00:00:00Z').getTime();
    const currentDate = new Date().getTime();
    const timeLeft = endDate - currentDate;

    this.days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    this.hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    this.minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    this.seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
  }
}
