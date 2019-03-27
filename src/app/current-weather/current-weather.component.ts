import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styles: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Minnesota', 'US')
      .subscribe(data => (this.current = data))
  }
}
