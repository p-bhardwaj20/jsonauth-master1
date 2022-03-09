import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesplitComponent } from './linesplit.component';

describe('LinesplitComponent', () => {
  let component: LinesplitComponent;
  let fixture: ComponentFixture<LinesplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
