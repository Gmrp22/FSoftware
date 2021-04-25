import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private ProductsServices: ProductsService) {}

  getAllProducts() {
    this.ProductsServices.getAllProducts().subscribe((products) => {
      console.log(products);
    });
  }
  createProduct() {
    const product = {
      nombre: 'Alcohol',
      precio_compra: 5,
      precio_venta: 8,
      descripcion: 'Alcohol',
      existencias: 50,
    };
    this.ProductsServices.createProduct(product).subscribe((newproduct) => {
      console.log(newproduct);
    });
  }
  ngOnInit(): void {}
}
