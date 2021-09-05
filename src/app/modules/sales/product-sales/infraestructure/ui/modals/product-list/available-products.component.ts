import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ProductData } from 'src/app/shared/interfaces/product-data';

import { GetProductsForProductSalesDomainPort } from '../../../../application/ports/out/other-domains/get-products-for-product-sales-domain.port';
import { ProductsService } from '../../../../../products/infraestructure/out/products.service';
import { ProductAddedDescription } from '../../classes/product-added-description';

@Component({
  selector: 'app-available-products-container',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss'],
})
export class AvailableProductsComponent {
  @Output() productAdded = new EventEmitter<ProductData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private getProductsForProductSalesDomainPort: GetProductsForProductSalesDomainPort;

  displayedColumns: string[] = [
    'Code',
    'Name',
    'Amount',
    'Price',
    'AggregateButton',
  ];
  // productList!: ProductData[]
  // MatPaginator Inputs
  length!: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  productList!: MatTableDataSource<ProductData>;
  constructor(productsService: ProductsService) {
    this.getProductsForProductSalesDomainPort = productsService;
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.loadProducts();
  }
  /* setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  } */

  loadProducts() {
    this.getProductsForProductSalesDomainPort
      .getProducts()
      .subscribe((response: ProductData[]) => {
        console.log(response);
        this.productList = new MatTableDataSource<ProductData>(response);
        this.productList.paginator = this.paginator;
        // this.length = response.length;
        // this.productList = response
      });
  }

  aggregateProduct(product: ProductData, indexForInput: number) {
    //let productAdded = new ProductAddedDescription()
    console.log(indexForInput);
    let input = document.querySelector(`.input-${indexForInput}`);
    console.log(input);
    this.productAdded.emit(product);
  }

  // MatPaginator Output
  // pageEvent!: PageEvent;

  /* setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  } */
}
