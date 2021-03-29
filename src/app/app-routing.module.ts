import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { ModuleComponent } from './Components/module/module.component';
import { UsersComponent } from './Components/users/users.component';
import { ProductsComponent } from './Components/products/products.component';
import { SaleComponent } from './Components/sale/sale.component';
import { PurchaseComponent } from './Components/purchase/purchase.component';

const routes: Routes = [
  { path: 'Home', component: ModuleComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Sales', component: SaleComponent },
  { path: 'Purchases', component: PurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
