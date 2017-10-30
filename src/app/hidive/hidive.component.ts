import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { getBaseUrl } from '../app.module';


@Component({
  selector: 'hidive',
  templateUrl: './hidive.component.html',
  styleUrls: ['./hidive.component.css']
})
export class HidiveComponent implements OnInit {

  public TitleRows: TitleRow[];

  constructor(http: Http) {
    let baseUrl:string = getBaseUrl();
    http.get(baseUrl + 'api/hidive').subscribe(result => {
      this.TitleRows = result.json() as TitleRow[];
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
export interface TitleRow {
  Name: string;
  Titles: object[];

} 
