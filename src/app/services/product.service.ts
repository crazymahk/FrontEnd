import { ListResponseModel } from './../Models/listResponseModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44314/api/';
  //categoryId={{categoryId}}'

  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {
    let newpath = this.apiUrl+ "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newpath);
  }
getProductsbycategoryId(categoryId:number):Observable<ListResponseModel<Product>> {
  let newpath2 = this.apiUrl+ "products/getbycategory?categoryId="+categoryId
  return this.httpClient.get<ListResponseModel<Product>>(newpath2);
}

}
