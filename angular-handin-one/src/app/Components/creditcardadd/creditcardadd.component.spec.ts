import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardaddComponent } from './creditcardadd.component';

describe('CreditcardaddComponent', () => {
  let component: CreditcardaddComponent;
  let fixture: ComponentFixture<CreditcardaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreditcardaddComponent]
    });
    fixture = TestBed.createComponent(CreditcardaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
