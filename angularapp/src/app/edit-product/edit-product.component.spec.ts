import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductComponent } from './edit-product.component';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;
  let activatedRouteStub: { snapshot: { params: { id: number } } };

  beforeEach(() => {
    activatedRouteStub = {
      snapshot: { params: { id: 1 } }
    };

    productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById', 'updateProduct']);

    TestBed.configureTestingModule({
      declarations: [EditProductComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ProductService, useValue: productServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
  });

  fit('should_call_updateProduct_and_navigate_on_form_submission', () => {
    // Arrange
    spyOn(TestBed.inject(Router), 'navigate'); // Use TestBed.inject to get the Router instance
    productServiceSpy.getProductById.and.returnValue(of({ id: 1, name: 'Test', category: 'TestCategory', price: 10, description: 'Test Description' }));
    productServiceSpy.updateProduct.and.returnValue(of(undefined)); // Assuming the update is successful

    // Act
    component.ngOnInit();
    fixture.detectChanges();
    component.updateProduct();
    fixture.detectChanges();

    // Assert
    expect(productServiceSpy.updateProduct).toHaveBeenCalledWith(component.productId, component.product);
    expect(TestBed.inject(Router).navigate).toHaveBeenCalledWith(['/products']);
  });
});
