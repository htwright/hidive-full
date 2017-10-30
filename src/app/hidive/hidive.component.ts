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
    let storage;
    console.log(baseUrl);
    http.get(baseUrl + 'api/hidive').subscribe(result => {
      console.log(result);
      this.TitleRows = result.json() as TitleRow[];
      console.log(this.TitleRows);
      // this.TitleRows[0].Titles.forEach(row => console.log(row)); 
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
export interface TitleRow {
  Name: string;
  Titles: object[];

} 
