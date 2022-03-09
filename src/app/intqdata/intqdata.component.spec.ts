import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntqdataComponent } from './intqdata.component';

describe('IntqdataComponent', () => {
  let component: IntqdataComponent;
  let fixture: ComponentFixture<IntqdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntqdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntqdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
