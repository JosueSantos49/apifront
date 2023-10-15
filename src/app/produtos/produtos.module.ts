import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutoFormComponent } from './containers/produto-form/produto-form.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoFormComponent,
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
