import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ViewProductComponent } from './view-product.component';
import { ProductService } from '../services/product.service';

describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    productServiceSpy = jasmine.createSpyObj('ProductService', ['getProductById']);

    TestBed.configureTestingModule({
      declarations: [ViewProductComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: 1 } } } },
        { provide: ProductService, useValue: productServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
  });

  fit('should_display_product_information', () => {
    // Arrange
    const mockProduct = { id: 1, name: 'Test Product', category: 'Test Category', price: 10, description: 'Test Description' };
    productServiceSpy.getProductById.and.returnValue(of(mockProduct));

    // Act
    fixture.detectChanges(); // Trigger ngOnInit and update the view

    // Assert
    expect(component.product).toEqual(mockProduct);
    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toEqual('View Product');
    expect(fixture.nativeElement.querySelectorAll('p')[0].textContent.trim()).toEqual(`ID: ${mockProduct.id}`);
    expect(fixture.nativeElement.querySelectorAll('p')[1].textContent.trim()).toEqual(`Name: ${mockProduct.name}`);
    expect(fixture.nativeElement.querySelectorAll('p')[2].textContent.trim()).toEqual(`Category: ${mockProduct.category}`);
    expect(fixture.nativeElement.querySelectorAll('p')[3].textContent.trim()).toEqual(`Price: ${mockProduct.price}`);
    expect(fixture.nativeElement.querySelectorAll('p')[4].textContent.trim()).toEqual(`Description: ${mockProduct.description}`);
  });
});
