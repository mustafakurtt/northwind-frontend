import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterText : string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe((res) => {
      this.products = res.data;
      this.dataLoaded = true;
    });
  }

  addToCart(product:Product){
    this.toastrService.success('Sepete Eklendi', product.productName);    
  }
}

