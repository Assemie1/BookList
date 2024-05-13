import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuecherUpdateComponent } from './buecher-update.component';

describe('BuecherUpdateComponent', () => {
  let component: BuecherUpdateComponent;
  let fixture: ComponentFixture<BuecherUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuecherUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuecherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
