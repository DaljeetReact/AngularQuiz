import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionsComponent } from './qustions.component';

describe('QustionsComponent', () => {
  let component: QustionsComponent;
  let fixture: ComponentFixture<QustionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QustionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QustionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
