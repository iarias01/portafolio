import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerModule } from './shared/components/banner/banner.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './shared/components/card/card.module';
import { SliderModule } from './shared/components/slider/slider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BannerModule,
    NavbarModule,
    HttpClientModule,
    CardModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
