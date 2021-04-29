import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Products } from '../../interfaces/products';
import { FormBuilder, FormGroup } from '@angular/forms';
let products: Products[] = [];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  p: Products[] = [];
  ProductsForm: FormGroup;
  // ProductsForm = this.formBuilder.group({
  //   nombre: '',
  //   precio_compra: 0,
  //   precio_venta: 0,
  //   descripcion: '',
  //   existencias: 0,
  // });

  constructor(
    private ProductsServices: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.getAllProducts();
    this.ProductsForm = this.formBuilder.group({
      nombre: '',
      precio_compra: '',
      precio_venta: '',
      descripcion: '',
      existencias: '',
    });
  }

  getAllProducts() {
    this.ProductsServices.getAllProducts().subscribe((response: any) => {
      this.data = response;
    });
  }

  delete(id: number) {
    this.ProductsServices.deleteProducto(id).subscribe((data) => {
      this.getAllProducts();
    });
  }
  onSubmit(): void {
    this.createProduct();
  }
  createProduct() {
    const product = {
      id: 0,
      nombre: this.ProductsForm.get('nombre')?.value,
      precio_compra: this.ProductsForm.get('precio_compra')?.value,
      precio_venta: this.ProductsForm.get('precio_venta')?.value,
      descripcion: this.ProductsForm.get('descripcion')?.value,
      existencias: this.ProductsForm.get('existencias')?.value,
    };
    console.log(product);
    this.ProductsServices.createProduct(product).subscribe((newproduct) => {});
    this.ProductsForm.reset();
    this.ngOnInit();
  }
  ngOnInit(): void {}

  // TABLA
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
  resetTable() {
    console.log('ddddddd');
    this.getAllProducts();
  }
}
