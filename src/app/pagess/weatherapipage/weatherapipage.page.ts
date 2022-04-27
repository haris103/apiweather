/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ApisrviceService } from './../../services/apisrvice.service';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

@Component({
  selector: 'app-weatherapipage',
  templateUrl: './weatherapipage.page.html',
  styleUrls: ['./weatherapipage.page.scss'],
})
export class WeatherapipagePage implements OnInit {
  //  key: any;
  data: any;
  dataArray1: any;
  date;
  date1;
  date2;
  date3;
  maximumValue;
  maximumValue1;
  maximumValue2;
  maximumValue3;

  locationName;
  countryRegion;

  constructor(public submitapi: ApisrviceService) {}

  ngOnInit() {
    this.submitapi.getCity('ohio').subscribe((d) => {
      this.locationName = d[0].LocalizedName;
      this.countryRegion = d[0].Region.LocalizedName;

      this.submitapi.getweather(2121532).subscribe((f) => {
        this.data = f;
        this.dataArray1 = this.data.DailyForecasts[0];

        this.maximumValue = this.data.DailyForecasts[0].Temperature.Maximum.Value;
        this.maximumValue1 = this.data.DailyForecasts[1].Temperature.Maximum.Value;
        this.maximumValue2 = this.data.DailyForecasts[2].Temperature.Maximum.Value;
        this.maximumValue3 = this.data.DailyForecasts[3].Temperature.Maximum.Value;

        this.date = format(new Date(this.data.DailyForecasts[0].Date),'EEEE,dd MMM');
       this.date1 = format(new Date(this.data.DailyForecasts[1].Date),'EEEE');
       this.date2 = format(new Date(this.data.DailyForecasts[2].Date),'EEEE');
       this.date3 = format(new Date(this.data.DailyForecasts[3].Date),'EEEE');
      });
    });
  }
}
