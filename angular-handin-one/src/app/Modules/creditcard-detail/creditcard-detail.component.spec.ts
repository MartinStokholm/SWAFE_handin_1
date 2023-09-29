import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardDetailComponent } from './creditcard-detail.component';

describe('CreditcardDetailComponent', () => {
  let component: CreditcardDetailComponent;
  let fixture: ComponentFixture<CreditcardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditcardDetailComponent]
    });
    fixture = TestBed.createComponent(CreditcardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
