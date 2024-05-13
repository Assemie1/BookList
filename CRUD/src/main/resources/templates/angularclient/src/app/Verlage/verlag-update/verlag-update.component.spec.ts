import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlagUpdateComponent } from './verlag-update.component';

describe('VerlagUpdateComponent', () => {
  let component: VerlagUpdateComponent;
  let fixture: ComponentFixture<VerlagUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerlagUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerlagUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
