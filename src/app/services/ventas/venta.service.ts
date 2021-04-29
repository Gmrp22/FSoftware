import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../../interfaces/venta';
@Injectable({
  providedIn: 'root',
})
export class VentaService {
  private api = 'http://127.0.0.1:8000/ventas/';

  constructor(private http: HttpClient) {}

  getAllVentas() {
    const path = `${this.api}`;
    return this.http.get<Venta[]>(path);
  }
  createVenta(venta: Venta) {
    const path = `${this.api}`;
    return this.http.post(path, venta);
  }
  deleteVenta(id: number) {
    const path = `${this.api}${id}`;
    return this.http.delete<Venta>(path);
  }
}
