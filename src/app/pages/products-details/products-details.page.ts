import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  product: Product = {} as Product;

  constructor(private service: ProductService, 
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    if(id){
      this.service.getProductById(id).subscribe(
        {
          next: product => this.product = product
        }
      );

      }
    }
  }


