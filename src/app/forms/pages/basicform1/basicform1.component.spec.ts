import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basicform1Component } from './basicform1.component';

describe('Basicform1Component', () => {
  let component: Basicform1Component;
  let fixture: ComponentFixture<Basicform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basicform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basicform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
