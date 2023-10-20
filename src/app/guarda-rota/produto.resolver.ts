import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProdutosService } from '../produtos/services/produtos.service';
import { Produto } from 'src/app/modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoResolver implements Resolve<Produto> {

  constructor(private produtosService: ProdutosService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {

    //Caso a rota seja de editar
    if(route.params && route.params['codigo']){
      return this.produtosService.loadById(route.params['codigo']);
    }

    //Caso a rota seja de novo
    return of({codigo: 0, titulo: '', preco: 0, quantidade: ''});
  }
}
