import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Produto } from '../../../modelo/Produto';
import { ProdutosService } from '../../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

//
produtos$: Observable<Produto[]> | null = null;

//JSON de produtos (Armazenar os produtos que vem da API)
//produtos: Produto[] = [];

//produtosService: ProdutosService;

constructor(
  private produtosService: ProdutosService,
  public dialog: MatDialog,
  private router: Router,
  private route: ActivatedRoute,
  private snackBar: MatSnackBar
  ){
  //this.produtos = [];
  //this.produtosService = new ProdutosService();
  //this.produtosService.lista().subscribe(produtos => this.produtos = produtos);
  this.atualizar();
}

//Método de seleção
/*
selecionar():void{
  this.produtosService.selecionar()
  .subscribe(retorno => this.produtos = retorno);
}
*/

ngOnInit(): void {
  //this.selecionar();
}

onAdd():any {
  this.router.navigate(['novo'], { relativeTo: this.route});
}

onEdit(produto: Produto) {
  this.router.navigate(['editar', produto.codigo], { relativeTo: this.route});
}

onRemover(produto: Produto) {
  this.produtosService.remover(produto.codigo).subscribe(
    () => {
      this.atualizar();
      this.snackBar.open('Produto removido com sucesso!', 'x', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    },
    error => this.onError('Erro ao tentar remover produto')
  );
}

atualizar() {
  this.produtos$ = this.produtosService.lista()
  .pipe(
    catchError(error => {
      this.onError('Erro ao carregar o produto');
      return of([])
    })
  );
}

onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}

}
