import { Produto } from './../../modelo/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //Url da APISERVE (Back-end)
  private url:string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  /*
  list(): Produto[] {
    return [
      {
        codigo: 1, titulo: 'Celular', preco: 2.000, quantidade: '1'
      }
    ];
  }
  */

  //Método para selecionar todos os produtos
  selecionar():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url);
  }

}
