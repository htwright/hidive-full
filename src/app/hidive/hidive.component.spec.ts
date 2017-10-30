import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidiveComponent } from './hidive.component';

describe('HidiveComponent', () => {
  let component: HidiveComponent;
  let fixture: ComponentFixture<HidiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
