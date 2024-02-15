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

  fit('should_display_validation_messages_on_form_submission_with_empty_fields', () => {
    // Arrange: Set form values to be empty
    component.productForm.patchValue({
      name: '',
      category: '',
      price: null,
      description: ''
    });

    // Act: Trigger form submission
    (component as any).addProduct();
    fixture.detectChanges(); // Update the view after changes

    // Assert: Check if validation messages are displayed
    const errorElements = fixture.nativeElement.querySelectorAll('.error');
    expect(errorElements.length).toBe(3); // Assuming there are three error messages

    // Check each error message individually
    expect(errorElements[0].textContent.trim()).toBe('Product Name is required.');
    expect(errorElements[1].textContent.trim()).toBe('Product Category is required.');
    expect(errorElements[2].textContent.trim()).toBe('Price is required and must be greater than or equal to 0.');
  });
});
