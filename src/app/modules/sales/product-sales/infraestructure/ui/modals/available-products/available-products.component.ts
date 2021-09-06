import { Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { GetProductsResponse, ProductData } from 'src/app/shared/interfaces/product/get-product-response';

import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from '../../../../../products/infraestructure/out/products.service';
import { ProductAddedDescription } from '../../classes/product-added-description';
import { IQueries } from '../../../../../../../shared/interfaces/queries/queries.interface';

@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss'],
})
export class AvailableProductsComponent implements OnInit {
  @Output() productAdded = new EventEmitter<ProductData>();
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort;

  displayedColumns: string[] = ['Code', 'Name', 'Amount', 'Price', 'AggregateButton'];
  totalProducts!: number;

  productList!: MatTableDataSource<ProductData>;
  constructor(productsService: ProductsService) {
    this.getProductsForProductSalesDomainPort = productsService;
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(offset?: number) {
    let queries: IQueries = {
      limit: 5,
      offset: offset ? offset : 0,
    };

    this.getProductsForProductSalesDomainPort.getProducts(queries).subscribe((response: GetProductsResponse) => {
      this.productList = new MatTableDataSource<ProductData>(response.rows);
      this.totalProducts = response.count;
      //this.productList.paginator = this.paginator;
    });
  }
  aggregateProduct(product: ProductData, indexForInput: number) {
    //let productAdded = new ProductAddedDescription()
    console.log(indexForInput);
    let input = document.querySelector(`.input-${indexForInput}`);
    console.log(input);
    this.productAdded.emit(product);
  }
  loadNextProducts(offset: any) {
    this.loadProducts(offset);
  }
}
