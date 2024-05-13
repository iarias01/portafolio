import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: any = undefined;
  @Input() onModal = false;
  @Output() selectItem = new EventEmitter();
  @Output() closeModal = new EventEmitter();
}
