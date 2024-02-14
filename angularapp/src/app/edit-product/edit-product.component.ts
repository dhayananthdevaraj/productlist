import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number;
  product: Product = {};

  constructor(private productService:ProductService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe((data: Product) => {
      this.product = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productId, this.product).subscribe(() => {
      // Redirect to the product list after updating
      this.router.navigate(['/products']);
    });
  }

}
