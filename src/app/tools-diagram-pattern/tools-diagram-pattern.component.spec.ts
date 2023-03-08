import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDiagramPatternComponent } from './tools-diagram-pattern.component';

describe('ToolsDiagramPatternComponent', () => {
  let component: ToolsDiagramPatternComponent;
  let fixture: ComponentFixture<ToolsDiagramPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsDiagramPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsDiagramPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
