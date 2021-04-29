import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../../interfaces/purchase';
@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private api = 'http://127.0.0.1:8000/compras/';

  constructor(private http: HttpClient) {}

  getAllPurchase() {
    const path = `${this.api}`;
    return this.http.get<Purchase[]>(path);
  }
  createPurchase(purchase: Purchase) {
    const path = `${this.api}`;
    return this.http.post(path, purchase);
  }
  deletePurchase(id: number) {
    const path = `${this.api}${id}`;
    return this.http.delete<Purchase>(path);
  }
}
