import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './containers/pessoas/pessoas.component';
import { PessoaFormComponent } from './containers/pessoa-form/pessoa-form.component';
import { PessoaResolver } from '../guarda-rota/pessoa.resolver';
import { AuthGuard } from '../_auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent
  },
  {
    path: 'novo',
    component: PessoaFormComponent, resolve: { pessoa: PessoaResolver },
    canActivate:[AuthGuard], data:{roles:['Admin']}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
