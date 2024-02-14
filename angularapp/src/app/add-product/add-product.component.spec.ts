import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AddProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should_create_add_product_component', () => {
    expect((component as any)).toBeTruthy();
  });

  fit('should_have_h2_tag_with_Add_Product', () => {
    const h2Elements =
      fixture.debugElement.nativeElement.querySelectorAll('h2');
    const addProductTitle = h2Elements[0].textContent;
    expect(addProductTitle).toEqual('Add Product');
  });

  fit('should_have_a_method_named_addProduct', () => {
    expect((component as any).addProduct).toBeDefined();
  });
});
