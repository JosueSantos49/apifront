import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },

  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },

  {
    path:'home', component: HomeComponent
  },
  {
    path:'admin', component: AdminComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'usuario', component: UserComponent,
    canActivate:[AuthGuard], data:{roles:['Usuario']}
  },

  {
    path:'forbidden', component: ForbiddenComponent
  },

  /*
  {
    path:'',
    redirectTo:'produtos',
    pathMatch: 'full'
  },
  */

  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(module => module.ProdutosModule),
    canActivate:[AuthGuard], data:{ roles:['Admin', 'Usuario'] }
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then(module => module.PessoasModule),
    canActivate:[AuthGuard], data:{ roles:['Admin', 'Usuario'] }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
