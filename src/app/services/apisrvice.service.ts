/* eslint-disable @typescript-eslint/quotes */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisrviceService {
// eslint-disable-next-line @typescript-eslint/quotes
key = "pXqEkijfee3AR8StTzPEzuXX3I5V2zCn";

  constructor(public http: HttpClient) { }
 getCity(city) {
  const baseUrl ="http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${this.key}&q=${city}`;
  const res = this.http.get(baseUrl + query);
  return res;
  };
  getweather(id){
  const baseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const query = `${id}?apikey=${this.key}`;
  const res = this.http.get(baseUrl + query);
  return res;
  }
}
