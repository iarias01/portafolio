import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerModule } from './shared/components/banner/banner.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './shared/components/card/card.module';
import { SliderModule } from './shared/components/slider/slider.module';
import { ModalModule } from './shared/components/modal/modal.module';
import { NewSliderModule } from './shared/components/new-slider/new-slider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BannerModule,
    NavbarModule,
    HttpClientModule,
    CardModule,
    SliderModule,
    ModalModule,
    NewSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
