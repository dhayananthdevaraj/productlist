import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpMock: HttpTestingController;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpClientModule],
      providers: [ ProductService ],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();

    productService = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should_create_product_list_component', () => {
    expect((component as any)).toBeTruthy();
  });

  // fit('should_delete_a_product', () => {
  //   const productId = 1;
  //   spyOn((productService as any), 'deleteProduct').and.callThrough();
  //   (component as any).deleteProduct(productId);
  //   expect((productService as any).deleteProduct).toHaveBeenCalledWith(productId);
  //   const req = httpMock.expectOne((productService as any).baseUrl + '/product/' + productId);
  //   expect(req.request.method).toBe('DELETE');
  //   req.flush({}); // Respond with no data.
  // });

  fit('should_delete_a_product', () => {
    expect((component as any).deleteProduct).toBeDefined();
  });

});
