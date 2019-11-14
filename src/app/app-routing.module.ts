import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';


const routes: Routes = [
  { path: 'item/:id', component: InventarioComponent, pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
