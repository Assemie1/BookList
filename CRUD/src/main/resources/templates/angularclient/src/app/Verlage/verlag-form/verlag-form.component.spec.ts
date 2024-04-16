import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlagFormComponent } from './verlag-form.component';

describe('VerlagFormComponent', () => {
  let component: VerlagFormComponent;
  let fixture: ComponentFixture<VerlagFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerlagFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerlagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
