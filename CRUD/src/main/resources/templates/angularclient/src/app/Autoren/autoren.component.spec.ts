import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AutorenComponent } from './autoren.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AutorenComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AutorenComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularclient'`, () => {
    const fixture = TestBed.createComponent(AutorenComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularclient');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AutorenComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angularclient');
  });
});
