import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoOraComponent } from './meteo-ora.component';

describe('MeteoOraComponent', () => {
  let component: MeteoOraComponent;
  let fixture: ComponentFixture<MeteoOraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoOraComponent]
    });
    fixture = TestBed.createComponent(MeteoOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
