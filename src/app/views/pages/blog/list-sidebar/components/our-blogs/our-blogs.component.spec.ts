import { ComponentFixture, TestBed } from '@angular/core/testing'

import { OurBlogsComponent } from './our-blogs.component'

describe('OurBlogsComponent', () => {
  let component: OurBlogsComponent
  let fixture: ComponentFixture<OurBlogsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBlogsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(OurBlogsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
