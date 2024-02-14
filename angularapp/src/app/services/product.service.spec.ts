import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../model/product.model';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  fit('should_create_product_service', () => {
    expect((service as any)).toBeTruthy();
  });

  fit('should_get_all_products', () => {
    const dummyProducts = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 }
    ];

    (service as any).getAllProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne((service as any).baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  fit('should_add_a_new_product', () => {
    const newProduct = { id: 3, name: 'Product 3', price: 300 };
    (service as any).addProduct(newProduct).subscribe(product => {
      expect(product).toEqual(newProduct);
    });
    const req = httpMock.expectOne((service as any).baseUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newProduct);
  });

  // fit('should_update_a_product_and_return_it', () => {
  //   const dummyProduct: Product = {
  //     id: 1,
  //     name: 'Test Product',
  //     // other product properties here
  //   };
  //   (service as any).updateProduct(dummyProduct.id, dummyProduct).subscribe(product => {
  //     expect(product).toEqual(dummyProduct);
  //   });
  //   const req = httpMock.expectOne((service as any).baseUrl + '/product/' + dummyProduct.id);
  //   expect(req.request.method).toBe('PUT');
  //   req.flush(dummyProduct);
  // });

  // fit('should_delete_a_product', () => {
  //   const productId = 1;

  //   service.deleteProduct(productId).subscribe((data: any) => {
  //     expect(data).toEqual(1);
  //   });
  
  //   const req = httpMock.expectOne(`${service.baseUrl}/${productId}`);
  //   expect(req.request.method).toBe('DELETE');
  //   req.flush({ status: 'success' });
  // });
  fit('should_fetch_a_product_by_id', () => {
    const productId = 1;
    const dummyProduct = { id: 1, name: 'Product 1', price: 100 };
    (service as any).getProductById(productId).subscribe(product => {
      expect(product).toEqual(dummyProduct);
    });
    const req = httpMock.expectOne(`${(service as any).baseUrl}/${productId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct);
  });

});
