import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component'

//Stub Components
@Component({ selector: 'app-title', template: ''})
class TitleComponent {}

@Component({ selector: 'app-navbar', template: ''})
class NavbarComponent {}

TestBed.configureTestingModule({
  declarations: [
    TitleComponent,
    NavbarComponent
  ]
})

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ 
        HeaderComponent,
        NavbarComponent,
        TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create the title', () =>{
    const fixture = TestBed.createComponent(TitleComponent);
    const titleComp = fixture.debugElement.componentInstance;
    expect(titleComp).toBeTruthy();
  })

  it('create the title', () =>{
    const fixture = TestBed.createComponent(TitleComponent);
    const titleComp = fixture.debugElement.componentInstance;
    expect(titleComp).toBeTruthy();
  })
});
