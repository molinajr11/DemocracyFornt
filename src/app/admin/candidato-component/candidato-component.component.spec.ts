import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoComponentComponent } from './candidato-component.component';

describe('CandidatoComponentComponent', () => {
  let component: CandidatoComponentComponent;
  let fixture: ComponentFixture<CandidatoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatoComponentComponent]
    });
    fixture = TestBed.createComponent(CandidatoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
