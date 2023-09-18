import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [

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
    path:'login', component: LoginComponent
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
    loadChildren: () => import('./produtos/produtos.module').then(module => module.ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
