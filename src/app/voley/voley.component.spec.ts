import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleyComponent } from './voley.component';

describe('VoleyComponent', () => {
  let component: VoleyComponent;
  let fixture: ComponentFixture<VoleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoleyComponent]
    });
    fixture = TestBed.createComponent(VoleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
