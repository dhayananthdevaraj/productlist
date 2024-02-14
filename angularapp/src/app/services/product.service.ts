import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl="https://ide-abfdabeabcbaed309547087bfadcfdbaceceone.premiumproject.examly.io/proxy/3001/product";

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`).pipe();
  }

  public addProduct(product: Product): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, product).pipe();
  }

  public updateProduct(id: number, product: Product): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, product).pipe();
  }

  public deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`).pipe();
  }

  public getProductById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`).pipe();
  }

}

