import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerModule } from './shared/components/banner/banner.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BannerModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
