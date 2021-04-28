import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Products } from '../../interfaces/products';

let products: Products[] = [];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  p: Products[] = [];
  constructor(private ProductsServices: ProductsService) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ProductsServices.getAllProducts().subscribe((response: any) => {
      this.data = response;
    });
  }

  delete(id: number) {
    this.ProductsServices.deleteProducto(id).subscribe(data=>{
      this.getAllProducts()
    });
  }

  ngOnInit(): void {}
  displayedColumns: string[] = [
    'nombre',
    'precio_compra',
    'precio_venta',
    'existencias',
    'descripcion',
    'Acciones',
  ];
  columnsToDisplayP: string[] = this.displayedColumns.slice();
  data: Products[] = products;
}
