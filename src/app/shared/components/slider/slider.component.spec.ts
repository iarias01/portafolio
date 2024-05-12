import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    fixture.detectChanges();
  });
});
