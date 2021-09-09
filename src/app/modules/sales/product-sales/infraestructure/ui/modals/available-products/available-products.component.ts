import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';

import { GetProductsResponse, ProductData } from 'src/app/shared/interfaces/product/get-product-response';

import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from '../../../../../products/infraestructure/out/products.service';
import { ProductAddedData } from '../../classes/product-added-data';
import { IQueries } from '../../../../../../../shared/interfaces/queries/queries.interface';
import { AvailableProductsMyxin } from './available-products.myxin';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';

@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss'],
})
export class AvailableProductsComponent extends AvailableProductsMyxin() implements OnInit {
  @Output() productAdded = new EventEmitter<ProductAddedData>();
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort;

  displayedColumns: string[] = ['Code', 'Name', 'Amount', 'Price', 'AggregateButton'];
  totalProducts!: number;
  amountProducstAdded = new FormControl('', Validators.pattern(REG_EXP.numeric));

  productList!: MatTableDataSource<ProductData>;
  constructor(productsService: ProductsService) {
    super();
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
      this.productList = new MatTableDataSource<ProductData>(this.addTotalToProductData(response.rows));
      this.totalProducts = response.count;
    });
  }
  loadNextProducts(offset: any) {
    this.loadProducts(offset);
  }
  aggregateProduct(event: IAmountProduct) {
    let indexProductId = event.id - 1;
    let product = this.productList.filteredData[indexProductId];

    let productAdded = new ProductAddedData(product.name, product.details, product.price, 0, event.amount);
    console.log(product);
    this.productAdded.emit(productAdded);
  }
}
