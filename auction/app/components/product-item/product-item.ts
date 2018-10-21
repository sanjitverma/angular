import {Component, Input} from '@angular/core';
import {Product, ProductService} from '../../services/product-service/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: 'app/components/product-item/product-item.html'
})
export default class ProductItemComponent {
  @Input() product: Product;
}