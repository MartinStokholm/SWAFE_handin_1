import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreditCardDetailComponent} from './credit-card-detail.component';

describe('CreditcardDetailComponent', () => {
  let component: CreditCardDetailComponent;
  let fixture: ComponentFixture<CreditCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardDetailComponent]
    });
    fixture = TestBed.createComponent(CreditCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
