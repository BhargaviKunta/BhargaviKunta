import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCatagoryComponent } from './add-product-catagory.component';

describe('AddProductCatagoryComponent', () => {
  let component: AddProductCatagoryComponent;
  let fixture: ComponentFixture<AddProductCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
