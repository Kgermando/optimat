import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { OfficeLocationComponent } from './components/office-location/office-location.component'
import { OurWorkComponent } from './components/our-work/our-work.component' 
import { Footer8Component } from '@/app/components/footer/footer8/footer8.component'

@Component({
  selector: 'app-contact-v2',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    OfficeLocationComponent,
    OurWorkComponent,
    Footer8Component,
  ],
  templateUrl: './contact-v2.component.html',
  styleUrl: './contact-v2.component.scss',
})
export class ContactV2Component {}
