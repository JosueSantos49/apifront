import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';
import { Produto } from './../../modelo/Cliente';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

//
produtos$: Observable<Produto[]>;

//JSON de produtos (Armazenar os produtos que vem da API)
//produtos: Produto[] = [];

displayedColumns = ['titulo', 'preco', 'quantidade', 'acao'];

//produtosService: ProdutosService;

constructor(
  private produtosService: ProdutosService,
  public dialog: MatDialog
  ){
  //this.produtos = [];
  //this.produtosService = new ProdutosService();
  this.produtos$ = this.produtosService.lista();
  //this.produtosService.lista().subscribe(produtos => this.produtos = produtos);
}

//Método de seleção
/*
selecionar():void{
  this.produtosService.selecionar()
  .subscribe(retorno => this.produtos = retorno);
}
*/

onAdd() {
  console.log('onAdd');
  this.onError('onAdd');
}


onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}


ngOnInit(): void {
  //this.selecionar();
}

}
