import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/modules/sales/products/infraestructure/interfaces/product-data';
import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from './../../../../../products/infraestructure/out/products.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort
  productList!: ProductData[]

  constructor(productsService: ProductsService) {
    this.getProductsForProductSalesDomainPort = productsService
  }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts() {
    this.getProductsForProductSalesDomainPort.getProducts().subscribe((response: ProductData[]) => {
      console.log(response)
      this.productList = response
    })
  }

}
