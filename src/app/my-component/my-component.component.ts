import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherClient } from 'src/clients/weather.client';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }
}
