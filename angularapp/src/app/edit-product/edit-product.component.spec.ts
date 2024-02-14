import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [EditProductComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should_create_edit_product_compoennt', () => {
    expect((component as any)).toBeTruthy();
  });

  fit('should_have_h2_tag_with_Edit_Product', () => {
    const h2Elements =
      fixture.debugElement.nativeElement.querySelectorAll('h2');
    const editProductTitle = h2Elements[0].textContent;
    expect(editProductTitle).toEqual('Edit Product');
  });

  fit('should_have_a_method_named_updateProduct', () => {
    expect((component as any).updateProduct).toBeDefined();
  });
});
