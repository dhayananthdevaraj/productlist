import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product : Product ={};

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(()=>{
      console.log();
      this.router.navigate(['/products']);
    });
  }

}
