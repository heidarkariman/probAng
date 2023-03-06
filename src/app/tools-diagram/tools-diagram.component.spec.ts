import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDiagramComponent } from './tools-diagram.component';

describe('ToolsDiagramComponent', () => {
  let component: ToolsDiagramComponent;
  let fixture: ComponentFixture<ToolsDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
