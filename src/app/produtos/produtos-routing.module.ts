import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { ProdutoFormComponent } from './containers/produto-form/produto-form.component';
import { ProdutoResolver } from './guarda-rota/produto.resolver';
import { AuthGuard } from '../_auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: 'novo',
    component: ProdutoFormComponent, resolve: { produto: ProdutoResolver },
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path: 'editar/:codigo',
    component: ProdutoFormComponent,
    resolve: { produto: ProdutoResolver },
    canActivate:[AuthGuard], data:{roles:['Admin']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
