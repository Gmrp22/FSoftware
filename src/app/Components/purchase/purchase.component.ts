import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';
import { Purchase } from '../../interfaces/purchase';
import { FormBuilder, FormGroup } from '@angular/forms';
let purchase: Purchase[] = [];
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  p: Purchase[] = [];
  PurchaseForm: FormGroup;
  constructor(
    private PurchaseServices: PurchaseService,
    private formBuilder: FormBuilder
  ) {
    this.getAllPurchase();
    this.PurchaseForm = this.formBuilder.group({
      fecha: '',
      usuario: '',
      total: '',
      estado: '',
    });
  }
  getAllPurchase() {
    this.PurchaseServices.getAllPurchase().subscribe((response: any) => {
      this.data = response;
    });
  }

  delete(id: number) {
    this.PurchaseServices.deletePurchase(id).subscribe((data) => {
      this.getAllPurchase();
    });
  }

  createPurchase() {
    const purchase = {
      id: 0,
      fecha: this.PurchaseForm.get('fecha')?.value,
      usuario: this.PurchaseForm.get('usuario')?.value,
      total: this.PurchaseForm.get('total')?.value,
      estado: this.PurchaseForm.get('estado')?.value,
    };
    console.log(purchase);
    this.PurchaseServices.createPurchase(
      purchase
    ).subscribe((newpurchase) => {});
    this.PurchaseForm.reset();
    this.ngOnInit();
  }
  resetTable() {
    this.getAllPurchase();
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
