import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://localhost:44343/api';
  apiUrlByCategory = 'https://localhost:44343/api/Products';
  getProducts(): Observable<ProductResponseModel> {
    let newPath = this.apiUrl + "/products/getall"
    return this.httpClient.get<ProductResponseModel>(newPath);
  }
  getProductsByCategory(categoryId: number): Observable<ProductResponseModel> {
    let newPath = this.apiUrl + "/products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ProductResponseModel>(newPath);
  }
}
