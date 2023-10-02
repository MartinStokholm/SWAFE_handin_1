import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionslistComponent} from './transactionslist.component';

describe('TransactionslistComponent', () => {
  let component: TransactionslistComponent;
  let fixture: ComponentFixture<TransactionslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransactionslistComponent]
    });
    fixture = TestBed.createComponent(TransactionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
