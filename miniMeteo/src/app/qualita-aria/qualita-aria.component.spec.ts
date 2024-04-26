import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitaAriaComponent } from './qualita-aria.component';

describe('QualitaAriaComponent', () => {
  let component: QualitaAriaComponent;
  let fixture: ComponentFixture<QualitaAriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualitaAriaComponent]
    });
    fixture = TestBed.createComponent(QualitaAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
