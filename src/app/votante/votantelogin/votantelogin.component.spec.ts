import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotanteloginComponent } from './votantelogin.component';

describe('VotanteloginComponent', () => {
  let component: VotanteloginComponent;
  let fixture: ComponentFixture<VotanteloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotanteloginComponent]
    });
    fixture = TestBed.createComponent(VotanteloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
