import {
  Component,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
  Renderer2,
  ViewChild,
  TemplateRef,
} from '@angular/core';

/**
 * SliderComponent
 */
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  /**
   * data slider
   */
  @Input() elements: unknown[] = [];

  /**
   * template slider
   */
  @Input() templateHtml!: TemplateRef<any>;

  /**
   * reference slider
   */
  @ViewChild('slider') slider!: ElementRef;

  /**
   * current index
   */
  currentIndex = 0;

  /**
   * it is saved where you clicked
   */
  private touchStartX = 0;

  /**
   * current click position X
   */
  private touchCurrentX = 0;

  /**
   * click hold
   */
  private readonly touchThreshold = 50;

  /**
   * constructor
   * @param renderer
   */
  constructor(private renderer: Renderer2) {}

  /**
   * AfterViewInit
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateSlider();
    }, 500);
  }

  /**
   * event that detects the click
   * @param event
   */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
  }

  /**
   * event that detects the movement of the click
   * @param event
   */
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.touchCurrentX = event.touches[0].clientX;
  }

  /**
   * event that detects when the click is released
   */
  @HostListener('touchend')
  onTouchEnd(): void {
    const touchDiff = this.touchCurrentX - this.touchStartX;

    if (touchDiff > this.touchThreshold) {
      this.prevSlide();
    } else if (touchDiff < -this.touchThreshold) {
      this.nextSlide();
    }

    this.touchStartX = 0;
    this.touchCurrentX = 0;
  }

  /**
   * button previus item
   */
  prevSlide(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateSlider();
  }

  /**
   * button next item
   */
  nextSlide(): void {
    this.currentIndex = Math.min(
      this.currentIndex + 1,
      this.elements.length - 1
    );
    this.updateSlider();
  }

  /**
   * update slider
   */
  private updateSlider(): void {
    const slideWidth = this.slider.nativeElement.firstElementChild.offsetWidth;
    const containerWidth = this.slider.nativeElement.parentNode.offsetWidth;
    const visibleSlides = Math.min(3, Math.floor(containerWidth / slideWidth));
    const maxIndex = this.elements.length - visibleSlides + 2;
    this.currentIndex = Math.min(this.currentIndex, maxIndex);

    const offsetX = -this.currentIndex * slideWidth;
    this.renderer.setStyle(
      this.slider.nativeElement,
      'transform',
      `translateX(${offsetX}px)`
    );
  }
}
