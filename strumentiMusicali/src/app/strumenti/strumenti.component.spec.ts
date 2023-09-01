import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrumentiComponent } from './strumenti.component';

describe('StrumentiComponent', () => {
  let component: StrumentiComponent;
  let fixture: ComponentFixture<StrumentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrumentiComponent]
    });
    fixture = TestBed.createComponent(StrumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
