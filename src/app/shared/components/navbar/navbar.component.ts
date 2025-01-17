import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showMenu = false;

  setMenu(id: string) {
    this.showMenu = false;
    document.getElementById(id)!.click();
  }
}
