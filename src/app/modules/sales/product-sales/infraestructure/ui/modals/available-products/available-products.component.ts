import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators } from '@angular/forms';

import { GetProductsResponse, ProductData } from 'src/app/shared/interfaces/product/get-product-response';

import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from '../../../../../products/infraestructure/out/products.service';
import { ProductAddedModel } from '../../models/product-added.model';
import { IQueries } from '../../../../../../../shared/interfaces/queries/queries.interface';
import { AvailableProductsMyxin } from './available-products.myxin';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';
import { IAmountProduct } from '../../../interfaces/amount-product.interface';
import { DateService } from './../../../../../../../shared/services/date.service';

@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss'],
})
export class AvailableProductsComponent extends AvailableProductsMyxin() implements OnInit {
  @Output() productAdded = new EventEmitter<ProductAddedModel>();
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort;

  displayedColumns: string[] = ['Code', 'Name', 'Amount', 'Price', 'AggregateButton'];
  totalProducts!: number;
  amountProducstAdded = new FormControl('', Validators.pattern(REG_EXP.numeric));

  productList!: MatTableDataSource<ProductData>;
  constructor(private readonly dateService: DateService, productsService: ProductsService) {
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
      // console.log(this.productList.filteredData);
    });
  }
  loadNextProducts(offset: any) {
    this.loadProducts(offset);
  }
  aggregateProduct(event: IAmountProduct) {
    let product = this.productList.filteredData[event.indexArray];

    let productAdded = new ProductAddedModel(
      event.id,
      event.amount,
      event.amount * product.price,
      this.dateService.getCurrentDate(),
      this.dateService.getCurrentTime(),
      0,
      product.price,
      product.name,
    );
    this.productAdded.emit(productAdded);
  }
}
