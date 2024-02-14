import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewProductComponent } from './view-product.component';

describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ViewProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should_create_view_product_component', () => {
    expect((component as any)).toBeTruthy();
  });

  fit('should_have_h2_tag_with_View_Product', () => {
    const h2Elements =
      fixture.debugElement.nativeElement.querySelectorAll('h2');
    const viewProductTitle = h2Elements[0].textContent;
    expect(viewProductTitle).toEqual('View Product');
  });
});
