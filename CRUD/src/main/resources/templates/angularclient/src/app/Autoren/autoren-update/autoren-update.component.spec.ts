import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorenUpdateComponent } from './autoren-update.component';

describe('AutorenUpdateComponent', () => {
  let component: AutorenUpdateComponent;
  let fixture: ComponentFixture<AutorenUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutorenUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutorenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
