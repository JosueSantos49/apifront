import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { ProdutoFormComponent } from './containers/produto-form/produto-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: 'novo',
    component: ProdutoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
