import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SignInComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ReactiveFormsDemo'`, () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ReactiveFormsDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ReactiveFormsDemo app is running!');
  });
});
