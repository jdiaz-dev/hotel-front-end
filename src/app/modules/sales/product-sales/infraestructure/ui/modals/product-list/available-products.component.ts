import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/app/shared/interfaces/product-data';
import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from '../../../../../products/infraestructure/out/products.service';
import { ProductAddedDescription } from '../../classes/product-added-description';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss']
})
export class AvailableProductsComponent implements OnInit {
  @Output() productAdded = new EventEmitter<ProductData>()
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort
  displayedColumns: string[] = ['Code', 'Name', 'Amount', 'Price', 'AggregateButton'];
  productList!: ProductData[]

  //productList: any
  constructor(productsService: ProductsService) {
    this.getProductsForProductSalesDomainPort = productsService
  }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts() {
    this.getProductsForProductSalesDomainPort.getProducts().subscribe((response: ProductData[]) => {
      console.log(response)
      //this.productList = new MatTableDataSource(response);
      this.productList = response
    })
  }
  aggregateProduct(product: ProductData, indexForInput: number) {
    //let productAdded = new ProductAddedDescription()
    console.log(indexForInput)
    let input = document.querySelector(`.input-${indexForInput}`)
    console.log(input)
    this.productAdded.emit(product)
  }
}
