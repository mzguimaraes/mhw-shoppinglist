import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearViewComponent } from './gear-view.component';

describe('GearViewComponent', () => {
  let component: GearViewComponent;
  let fixture: ComponentFixture<GearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
