import { Route } from '@angular/router'
import { Servicev1Component } from './servicev1/servicev1.component'
import { Servicev2Component } from './servicev2/servicev2.component'
import { ServiceSingleComponent } from './service-single/service-single.component'

export const SERVICE_ROUTES: Route[] = [
  {
    path: 'v1',
    component: Servicev1Component,
    data: { title: 'Services v.1' },
  },
  {
    path: 'global',
    component: Servicev2Component,
    data: { title: 'Nos Services' },
  },
  {
    path: 'single',
    component: ServiceSingleComponent,
    data: { title: 'Service Single' },
  },
]
