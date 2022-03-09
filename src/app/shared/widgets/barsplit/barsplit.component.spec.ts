import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsplitComponent } from './barsplit.component';

describe('BarsplitComponent', () => {
  let component: BarsplitComponent;
  let fixture: ComponentFixture<BarsplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
