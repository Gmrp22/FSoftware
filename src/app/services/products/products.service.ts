import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../../interfaces/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = 'http://127.0.0.1:8000/producto/';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    const path = `${this.api}`;
    return this.http.get<Products[]>(path);
  }
  createProduct(product: Products) {
    const path = `${this.api}`;
    return this.http.post(path, product);
  }
  deleteProducto(id: number) {
    const path = `${this.api}${id}`
    return this.http.delete<Products>(path)
  }

  // getTask(id: string) {
  //   const path = `${this.api}/todos/${id}`;
  //   return this.http.get<Task>(path);
  // }

  // createTask(task: Task) {
  //   const path = `${this.api}/todos`;
  //   return this.http.post(path, task);
  // }

  // updateTask(task: Task) {
  //   const path = `${this.api}/todos/${task.id}`;
  //   return this.http.put<Task>(path, task);
  // }

  // deleteTask(id: string) {
  //   const path = `${this.api}/todos/${id}`;
  //   return this.http.delete(path);
  // }
}
