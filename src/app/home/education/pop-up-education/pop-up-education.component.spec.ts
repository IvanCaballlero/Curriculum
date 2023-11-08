import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEducationComponent } from './pop-up-education.component';

describe('PopUpEducationComponent', () => {
  let component: PopUpEducationComponent;
  let fixture: ComponentFixture<PopUpEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
