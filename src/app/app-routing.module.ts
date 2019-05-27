import { FormularyComponent } from './formulary/formulary.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'adicionar', component: FormularyComponent},
  { path: 'editar/:id', component: FormularyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
