import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Previsioni5GComponent } from './previsioni5-g.component';

describe('Previsioni5GComponent', () => {
  let component: Previsioni5GComponent;
  let fixture: ComponentFixture<Previsioni5GComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Previsioni5GComponent]
    });
    fixture = TestBed.createComponent(Previsioni5GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
