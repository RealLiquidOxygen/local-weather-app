import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'
import { Observable, of } from 'rxjs'
export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
