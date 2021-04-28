import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import { Purchase } from '../../interfaces/purchase';
let purchase: Purchase[] = [];
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  constructor(private PurchaseServices: PurchaseService) {
    this.getAllPurchase();
  }
  getAllPurchase() {
    this.PurchaseServices.getAllPurchase().subscribe((response: any) => {
      console.log(response.usuario);
      this.data = response;
    });
  }

  delete(id: number) {
    this.PurchaseServices.deletePurchase(id).subscribe(data=>{
      this.getAllPurchase()
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
  data: Purchase[] = purchase;
}
