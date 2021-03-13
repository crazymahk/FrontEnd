import { ListResponseModel } from './../../Models/listResponseModel';
import { ProductService } from './../../services/product.service';
import { Product } from './../../Models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Northwindas';
  user = 'acaba';

  products: Product[] = [];
  dataLoaded = false;
  productResponseModel: ListResponseModel<Product> = {
    data: this.products,
    message: '',
    success: true,
  };
  apiUrl = 'https://localhost:44314/api/products/getall';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log('Api request başladı');
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    console.log('Mapiii bitti la');
  }
}
