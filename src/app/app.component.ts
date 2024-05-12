import { Component } from '@angular/core';
import { JsonService } from './services/json.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  portafolios: any[] = [];
  skills: any[] = [];
  activities: any[] = [];

  constructor(private getJson: JsonService) {
    this.getJson
      .getExpriences()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.portafolios = data;
        console.log(data);
      });
    this.getJson
      .getSkills()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.skills = data;
        console.log(data);
      });
    this.getJson
      .getActivities()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.activities = data;
        console.log(data);
      });
  }
}
