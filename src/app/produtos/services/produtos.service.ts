import { Produto } from './../../modelo/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //Url da APISERVE (Back-end)
  private url:string = 'http://localhost:8080';

  //arquivo de teste local
  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  /*
  //Teste
  list(): Produto[] {
    return [
      {
        codigo: 1, titulo: 'Celular', preco: 2.000, quantidade: '1'
      }
    ];
  }
  */

  lista() {
    return this.httpClient.get<Produto[]>(this.API)
    .pipe(
     first(),
     //delay(1000),
     tap(produtos => console.log(produtos))
    );
  }

  //Método para selecionar todos os produtos
  selecionar():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url);
  }

  salvar(registro: Produto) {
    return this.httpClient.post<Produto>(this.API, registro).pipe(first());
    //console.log(registro);
  }
}
