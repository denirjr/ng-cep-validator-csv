import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultModalComponent } from './consult-modal.component';

describe('ConsultModalComponent', () => {
  let component: ConsultModalComponent;
  let fixture: ComponentFixture<ConsultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
