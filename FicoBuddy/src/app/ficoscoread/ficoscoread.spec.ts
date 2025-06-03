import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ficoscoread } from './ficoscoread';

describe('Ficoscoread', () => {
  let component: Ficoscoread;
  let fixture: ComponentFixture<Ficoscoread>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ficoscoread]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ficoscoread);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
