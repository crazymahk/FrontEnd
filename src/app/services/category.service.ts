import { Category } from './../Models/categorgy';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  apiUrl = 'https://localhost:44314/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl); }

}
