import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbappeComponent } from './mbappe.component';

describe('MbappeComponent', () => {
  let component: MbappeComponent;
  let fixture: ComponentFixture<MbappeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbappeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
