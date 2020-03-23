import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourseNotFoundComponent } from './resourse-not-found.component';

describe('ResourseNotFoundComponent', () => {
  let component: ResourseNotFoundComponent;
  let fixture: ComponentFixture<ResourseNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourseNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourseNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
