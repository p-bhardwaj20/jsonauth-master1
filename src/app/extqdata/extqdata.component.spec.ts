import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtqdataComponent } from './extqdata.component';

describe('ExtqdataComponent', () => {
  let component: ExtqdataComponent;
  let fixture: ComponentFixture<ExtqdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtqdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtqdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
