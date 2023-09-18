import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Url da APISERVE (Back-end)
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  //Método para selecionar todos os produtos
  selecionar():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url);
  }

  //Método para cadatrar produtos
  cadastrar(obj:Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, obj);
  }

  //Método para editar produtos
  editar(obj:Produto):Observable<Produto>{
    return this.http.put<Produto>(this.url, obj);
  }

  //Método para remover produtos
  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }


}
