import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoComponentComponent } from './voto-component.component';

describe('VotoComponentComponent', () => {
  let component: VotoComponentComponent;
  let fixture: ComponentFixture<VotoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotoComponentComponent]
    });
    fixture = TestBed.createComponent(VotoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
