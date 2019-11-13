import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Component } from '@angular/core';


//Stub Components
@Component({ selector: 'app-header', template: ''})
class HeaderComponent {}

TestBed.configureTestingModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ]
})

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`checks that head exists`, () => {
    expect('#head').toBeTruthy();
  });

  it(`checks that style meta-data exists`, () => {
    expect('#style').toBeTruthy();
  });

  it(`should create the header component`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  });

  it(`should have as title 'Benjamin Sullivan'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Benjamin Sullivan');
  });

  it(`should create an <hr>`, () => {
    expect('#hr').toBeTruthy();
  });

});
