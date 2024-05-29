import { AfterViewInit, Component } from '@angular/core';
import { JsonService } from './services/json.service';
import { take } from 'rxjs';
import { ESizeModal } from './shared/components/modal/modal-size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  portafolios: any[] = [];
  skills: any[] = [];
  activities: any[] = [];
  showModal = false;
  item: any = undefined;
  sizeModal = ESizeModal;

  constructor(private getJson: JsonService) {
    this.getJson
      .getExpriences()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.portafolios = data;
      });
    this.getJson
      .getSkills()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.skills = data;
      });
    this.getJson
      .getActivities()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.activities = data;
      });
  }
  setItem(item: any) {
    this.item = item;
    this.showModal = true;
  }

  ngAfterViewInit() {
    const container = document.getElementById('body');
    const my_name = document.getElementById('my_name');

    if (container && my_name) {
      container.addEventListener('scroll', () => {
        if (container.scrollTop > 300) {
          my_name.style.display = 'flex';
        } else {
          my_name.style.display = 'none';
        }
      });
    }
  }
}
