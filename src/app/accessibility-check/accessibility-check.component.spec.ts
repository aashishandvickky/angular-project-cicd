import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityCheckComponent } from './accessibility-check.component';

describe('AccessibilityCheckComponent', () => {
  let component: AccessibilityCheckComponent;
  let fixture: ComponentFixture<AccessibilityCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessibilityCheckComponent]
    });
    fixture = TestBed.createComponent(AccessibilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
