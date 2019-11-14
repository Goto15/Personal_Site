import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create navigation links', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    var nav_links = compiled.querySelectorAll('li');
    var expected_links = ['Blog', 'Projects', 'Contact']
    var all_links_match = true;

    for(var i = 0; 0 < nav_links.size; i++){
      if(nav_links[i] != expected_links[i])
        all_links_match = false;
    }

    expect(all_links_match).toEqual(true)
  })
});
