import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataResponseModel } from 'src/app/models/dataResponseModel';
import { Category } from 'src/app/models/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getAllApiUrl = 'https://localhost:44343/api/Categories/getall';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<DataResponseModel<Category>> {
    return this.httpClient.get<DataResponseModel<Category>>(this.getAllApiUrl);
  }
}
