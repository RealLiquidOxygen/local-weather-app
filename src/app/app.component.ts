import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center">
      <mat-toolbar>
        LocalCast Weather
      </mat-toolbar>
      <div>Your city, your forecast, right now!</div>
      <h2>Current Weather</h2>
      <app-current-weather></app-current-weather>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'local-weather-app'
}
