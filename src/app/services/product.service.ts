import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${environment.baseUrl}/products/${id}`);
  }
}
