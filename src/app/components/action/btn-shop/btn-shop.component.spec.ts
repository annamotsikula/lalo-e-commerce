import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnShopComponent } from './btn-shop.component';

describe('BtnShopComponent', () => {
  let component: BtnShopComponent;
  let fixture: ComponentFixture<BtnShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
