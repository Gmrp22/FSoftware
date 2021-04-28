import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/ventas/venta.service';
import { Venta } from '../../interfaces/venta';
let venta: Venta[] = [];
@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.css']
  })
export class VentasComponent implements OnInit {
  constructor(private VentasServices: VentaService) {
    this.getAllVentas();
  }
  getAllVentas() {
    this.VentasServices.getAllVentas().subscribe((response: any) => {
      console.log(response.usuario);
      this.data = response;
    });
  }

  delete(id: number) {
    this.VentasServices.deleteVenta(id).subscribe(data=>{
      this.getAllVentas()
    });
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
