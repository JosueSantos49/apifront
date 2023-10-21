import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../modelo/Pessoa';
import { tap, first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private url:string = 'http://localhost:8080';

  PATH_API_AUTH = '/api/auth';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Pessoa[]>(this.url + this.PATH_API_AUTH + '/lista-pessoas', {responseType:"json"})
    .pipe(
    first(),
    //delay(1000),
    tap(pessoas => console.log(pessoas))
    );
  }

  salvar(registro: Partial<Pessoa>) {
    return this.httpClient.post<Pessoa>(this.url + this.PATH_API_AUTH + '/criar-pessoa', registro, {responseType:"json"}).pipe(first());
  }

  //Inseri ou edita com resolver. Obter a informação do servidor
  loadById(codigo: number) {
    console.log(this.httpClient.get<Pessoa>(`${this.url + this.PATH_API_AUTH}/pessoa/${codigo}`));
    return this.httpClient.get<Pessoa>(`${this.url + this.PATH_API_AUTH}/pessoa/${codigo}`);
  }

  remover(codigo: number) {
    return this.httpClient.delete<Pessoa>(`${this.url + this.PATH_API_AUTH}/pessoa/${codigo}`).pipe(first());
  }


}
