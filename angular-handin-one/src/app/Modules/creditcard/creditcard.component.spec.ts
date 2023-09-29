import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardComponent } from './creditcard.component';

describe('CreditcardComponent', () => {
  let component: CreditcardComponent;
  let fixture: ComponentFixture<CreditcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditcardComponent]
    });
    fixture = TestBed.createComponent(CreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
