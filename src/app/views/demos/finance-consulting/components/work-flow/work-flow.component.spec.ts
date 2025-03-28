import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WorkFlowComponent } from './work-flow.component'

describe('WorkFlowComponent', () => {
  let component: WorkFlowComponent
  let fixture: ComponentFixture<WorkFlowComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFlowComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(WorkFlowComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
