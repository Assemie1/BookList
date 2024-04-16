import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlagListComponent } from './verlag-list.component';

describe('VerlagListComponent', () => {
  let component: VerlagListComponent;
  let fixture: ComponentFixture<VerlagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerlagListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerlagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
