import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPopUpComponent } from './support-pop-up.component';

describe('SupportPopUpComponent', () => {
  let component: SupportPopUpComponent;
  let fixture: ComponentFixture<SupportPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
