import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HidiveComponent } from './hidive/hidive.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HidiveComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
