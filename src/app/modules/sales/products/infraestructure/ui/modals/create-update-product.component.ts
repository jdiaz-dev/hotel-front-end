import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from '../models/product.model';
import { ProductsService } from './../../out/products.service';
import { ProductData } from './../../interfaces/product-data';
import { REG_EXP } from 'src/app/shared/consts/reg-exp.enum';

@Component({
  selector: 'app-create-update-product',
  templateUrl: './create-update-product.component.html',
  styleUrls: ['./create-update-product.component.scss']
})
export class CreateUpdateProductComponent implements OnInit {
  action: string = 'create'
  productData!: FormGroup
  product: ProductModel = new ProductModel('', '', '', '', null)
  productId: number = NaN

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductData
  ) { }

  ngOnInit(): void {
    this.paramsToUpdateProduct()

    this.productData = this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(REG_EXP.numeric)]],
      name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REG_EXP.alphanumeric)]],
      brand: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REG_EXP.alphanumeric)]],
      details: ['', [Validators.maxLength(50), Validators.pattern(REG_EXP.alphanumeric)]],
      price: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(REG_EXP.numeric)]],
    })
  }
  paramsToUpdateProduct() {
    this.product = this.data !== null ? new ProductModel(this.data.code, this.data.name, this.data.brand, this.data.details, this.data.price) : this.product
    this.productId = this.data !== null ? this.data.id : this.productId
    this.action = this.data !== null ? 'update' : this.action
  }
  saveProduct(form: any) {
    if (this.action === 'create') {
      this.createProduct()
    } else if (this.action === 'update') {
      this.updateProduct()
    }
  }
  createProduct() {
    this.productsService.createProduct(this.productData.value).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  updateProduct() {
    this.productsService.updateProduct(this.productData.value, this.productId).subscribe((response: any) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
  }
  get productControl() {
    return this.productData.controls
  }
}
