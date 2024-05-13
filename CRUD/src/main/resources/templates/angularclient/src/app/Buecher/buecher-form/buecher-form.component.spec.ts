import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuecherFormComponent } from './buecher-form.component';

describe('BuecherFormComponent', () => {
  let component: BuecherFormComponent;
  let fixture: ComponentFixture<BuecherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuecherFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuecherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
