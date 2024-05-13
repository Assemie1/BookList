import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuecherListComponent } from './buecher-list.component';

describe('BuecherListComponent', () => {
  let component: BuecherListComponent;
  let fixture: ComponentFixture<BuecherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuecherListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuecherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
