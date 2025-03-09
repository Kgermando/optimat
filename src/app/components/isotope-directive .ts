import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  AfterViewInit,
  PLATFORM_ID, 
  Inject,
} from '@angular/core'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import { isPlatformBrowser } from '@angular/common'

@Directive({
  selector: '[appIsotope]',
  standalone: true,
})
export class IsotopeDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() appIsotopeOptions: Isotope.IsotopeOptions = {}
  private isotopeInstance!: Isotope

  constructor(private elementRef: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('isotope-layout').then(Isotope => {
        this.initializeIsotope()
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isPlatformBrowser(this.platformId)) {
      import('isotope-layout').then(Isotope => {
        if (
          changes['appIsotopeOptions'] &&
          !changes['appIsotopeOptions'].isFirstChange()
        ) {
          this.updateIsotopeOptions()
        }
      });
    }
    
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('isotope-layout').then(Isotope => {
        if (this.isotopeInstance) {
          this.isotopeInstance.destroy()
        }
      });
    }
   
  }

  private initializeIsotope(): void {
    imagesLoaded(this.elementRef.nativeElement, () => {
      this.isotopeInstance = new Isotope(
        this.elementRef.nativeElement,
        this.appIsotopeOptions
      )
    })
  }

  private updateIsotopeOptions(): void {
    if (this.isotopeInstance) {
      this.isotopeInstance.arrange(this.appIsotopeOptions)
    }
  }
  public arrangeIsotope(filter: string): void {
    if (this.isotopeInstance) {
      this.isotopeInstance.arrange({ filter: filter })
    }
  }
}
