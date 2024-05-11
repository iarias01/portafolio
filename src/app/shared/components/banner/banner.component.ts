import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  underscoreHidden = false;

  ngOnInit(): void {
    interval(700).subscribe(() => {
      this.underscoreHidden = !this.underscoreHidden;
    });
  }
}
