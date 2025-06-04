import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatresponsesummary } from './chatresponsesummary';

describe('Chatresponsesummary', () => {
  let component: Chatresponsesummary;
  let fixture: ComponentFixture<Chatresponsesummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatresponsesummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatresponsesummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
