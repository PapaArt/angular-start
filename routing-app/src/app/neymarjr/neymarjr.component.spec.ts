import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeymarjrComponent } from './neymarjr.component';

describe('NeymarjrComponent', () => {
  let component: NeymarjrComponent;
  let fixture: ComponentFixture<NeymarjrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeymarjrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeymarjrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
