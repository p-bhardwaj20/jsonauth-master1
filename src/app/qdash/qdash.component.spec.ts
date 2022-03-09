import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdashComponent } from './qdash.component';

describe('QdashComponent', () => {
  let component: QdashComponent;
  let fixture: ComponentFixture<QdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
