import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlageComponent } from './verlage.component';

describe('VerlageComponent', () => {
  let component: VerlageComponent;
  let fixture: ComponentFixture<VerlageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerlageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
