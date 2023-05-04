import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://localhost:44343/api/Products/getall';

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
  }
}
