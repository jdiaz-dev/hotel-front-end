import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessKeys } from 'src/app/shared/enums/name-token';
import { SERVER } from 'src/app/shared/enums/server.enum';
import { StateUserService } from 'src/app/shared/services/state-user.service';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../ui/models/product.model';
import { ProductData } from './../interfaces/product-data';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private serverUrl = environment.serverUrl
  private headers!: HttpHeaders
  private hotelId!: number

  constructor(
    private http: HttpClient,
    private stateUserService: StateUserService
  ) { }
  private loadRequiredProperties() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json').set(AccessKeys.NAME_TOKEN, this.stateUserService.getToken())
    this.hotelId = this.stateUserService.getHotelId()

  }
  createProduct(productModel: ProductModel) {
    this.loadRequiredProperties()
    const body = JSON.stringify(productModel);
    return this.http.post(`${this.serverUrl}/${SERVER.PREFIX}/products/${this.hotelId}`, body, { headers: this.headers })
  }
  getProducts() {
    this.loadRequiredProperties()
    return this.http.get<ProductData[]>(`${this.serverUrl}/${SERVER.PREFIX}/products/${this.stateUserService.getHotelId()}`, { headers: this.headers })
  }
  updateProduct(productModel: ProductModel, productId: number) {
    this.loadRequiredProperties()
    const body = JSON.stringify(productModel);
    return this.http.put(`${this.serverUrl}/${SERVER.PREFIX}/products/${this.stateUserService.getHotelId()}/${productId}`, body, { headers: this.headers })
  }
  removeProduct(productId: number) {
    this.loadRequiredProperties()
    return this.http.delete(`${this.serverUrl}/${SERVER.PREFIX}/products/${this.stateUserService.getHotelId()}/${productId}`, { headers: this.headers })
  }

}
