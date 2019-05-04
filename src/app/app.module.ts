import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
