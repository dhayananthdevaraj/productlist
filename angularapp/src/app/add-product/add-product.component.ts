import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  addProduct() {
    this.validateAllFormFields();

    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe(() => {
        console.log('Product added successfully');
        this.router.navigate(['/products']);
      });
    }
  }

  validateAllFormFields() {
    Object.keys(this.productForm.controls).forEach(field => {
      const control = this.productForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
