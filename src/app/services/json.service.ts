import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getExpriences() {
    return this.http.get('./assets/json/portafolios.json');
  }

  getActivities() {
    return this.http.get('./assets/json/activities.json');
  }

  getSkills() {
    return this.http.get('./assets/json/skill.json');
  }
}
