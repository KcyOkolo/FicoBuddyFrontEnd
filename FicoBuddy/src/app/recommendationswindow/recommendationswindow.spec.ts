import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recommendationswindow } from './recommendationswindow';

describe('Recommendationswindow', () => {
  let component: Recommendationswindow;
  let fixture: ComponentFixture<Recommendationswindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recommendationswindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recommendationswindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
