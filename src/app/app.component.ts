import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angWeather';
  public cityInput = '';
  public url = 'http://localhost:3000/weather_query';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {}

  public submitCity() {
    console.log('City ->', this.cityInput);
    const obj = {
      city: this.cityInput
    }
    return this.http.post(this.url, obj, this.httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
