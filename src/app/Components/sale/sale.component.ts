import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/ventas/venta.service';
import { Venta } from '../../interfaces/venta';
import { FormBuilder, FormGroup } from '@angular/forms';
let venta: Venta[] = [];
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class VentasComponent implements OnInit {
  p: Venta[] = [];
  SaleForm: FormGroup;
  constructor(
    private VentasServices: VentaService,
    private formBuilder: FormBuilder
  ) {
    this.getAllVentas();
    this.SaleForm = this.formBuilder.group({
      fecha: '',
      usuario: '',
      total: '',
      estado: '',
    });
  }
  getAllVentas() {
    this.VentasServices.getAllVentas().subscribe((response: any) => {
      let len = response.length;
      let cont = 0;
      while (cont < len) {
        response[cont].usuario = response[cont].usuario.nombre;
        cont += 1;
      }
      this.data = response;
    });
  }

  delete(id: number) {
    this.VentasServices.deleteVenta(id).subscribe((data) => {
      this.getAllVentas();
    });
  }

  createSale() {
    const sale = {
      id: 0,
      fecha: this.SaleForm.get('fecha')?.value,
      usuario: this.SaleForm.get('usuario')?.value,
      total: this.SaleForm.get('total')?.value,
      estado: this.SaleForm.get('estado')?.value,
    };
    this.VentasServices.createVenta(sale).subscribe((newsale) => {});
    this.SaleForm.reset();
    this.ngOnInit();
  }
  resetTable() {
    this.getAllVentas();
  }
  ngOnInit(): void {}
  displayedColumns: string[] = [
    'fecha',
    'usuario',
    'total',
    'estado',
    'Acciones',
  ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Venta[] = venta;
}
