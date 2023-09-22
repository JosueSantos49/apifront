import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Produto } from '../../modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //Url da APISERVE (Back-end)
  private url:string = 'http://localhost:8080';

  PATH_API_AUTH = '/api/auth';

  //arquivo de teste local mocado
  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  /*
  //Teste mocado
  list(): Produto[] {
    return [
      {
        codigo: 1, titulo: 'Celular', preco: 2.000, quantidade: '1'
      }
    ];
  }
  */

  salvar(registro: Partial<Produto>) {
    return this.httpClient.post<Produto>(this.url + this.PATH_API_AUTH + '/criar-produto', registro, {responseType:"json"}).pipe(first());
  }

  lista() {
    return this.httpClient.get<Produto[]>(this.url + this.PATH_API_AUTH + '/lista-produtos', {responseType:"json"})
    .pipe(
     first(),
     delay(1000),
     tap(produtos => console.log(produtos))
    );
  }

  //Inseri ou edita com resolver. Obter a informação do servidor
  loadById(codigo: number) {
    return this.httpClient.get<Produto>(`${this.url + this.PATH_API_AUTH}/${codigo}`);
  }

  //Método para selecionar todos os produtos
  selecionar():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url);
  }

  remover(codigo: number) {
    return this.httpClient.delete<Produto>(`${this.url + this.PATH_API_AUTH}/${codigo}`).pipe(first());
  }


}
