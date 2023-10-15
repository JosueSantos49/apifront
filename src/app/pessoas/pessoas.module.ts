import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoaFormComponent } from './containers/pessoa-form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoasComponent } from './containers/pessoas/pessoas.component';

@NgModule({
  declarations: [
    PessoaFormComponent,
    PessoaListComponent,
    PessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PessoasModule { }
