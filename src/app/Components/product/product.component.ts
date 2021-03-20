import { ListResponseModel } from './../../Models/listResponseModel';
import { ProductService } from './../../services/product.service';
import { Product } from './../../Models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Northwindas';
  user = 'acaba';
  filterText: '';

  products: Product[] = [];
  dataLoaded = false;
  productResponseModel: ListResponseModel<Product> = {
    data: this.products,
    message: '',
    success: true,
  };
  apiUrl = 'https://localhost:44314/api/products/getall';
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsbyCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    console.log('Api request başladı');
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
    console.log('Mapiii bitti la');
  }

  getProductsbyCategory(categoryId: number) {
    this.productService
      .getProductsbycategoryId(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
    console.log('categori bitti la');
  }
}
