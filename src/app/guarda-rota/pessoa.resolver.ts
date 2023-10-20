import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PessoasService } from '../pessoas/services/pessoas.service';
import { Pessoa } from '../modelo/Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaResolver implements Resolve<Pessoa> {

  constructor(private pessoasService: PessoasService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa> {

        //Caso a rota seja de editar
        if(route.params && route.params['codigo']){
          return this.pessoasService.loadById(route.params['codigo']);
        }

        //Caso a rota seja de novo
        return of({codigo: 0, nome: '', cpf: ''});
  }
}
