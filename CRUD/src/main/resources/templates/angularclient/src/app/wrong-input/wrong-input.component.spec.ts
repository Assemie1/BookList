import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongInputComponent } from './wrong-input.component';

describe('WrongInputComponent', () => {
  let component: WrongInputComponent;
  let fixture: ComponentFixture<WrongInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrongInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
