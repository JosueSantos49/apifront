import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pessoa } from '../../../modelo/Pessoa';
import { PessoasService } from '../../services/pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ConfirmacaoDialogComponent } from 'src/app/shared/components/confirmacao-dialog/confirmacao-dialog.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit{

  pessoas$: Observable<Pessoa[]> | null = null;

  constructor(
    private pessoaService: PessoasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.atualizar();
  }

  ngOnInit(): void {
  }

  onAdd():any{
    this.router.navigate(['novo'], { relativeTo: this.route});
  }

  onEdit(pessoa: Pessoa){
    this.router.navigate(['editar', pessoa.codigo], { relativeTo: this.route});
  }

  onRemover(pessoa: Pessoa){
    //Confirmação dialog
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
    data: 'Tem certeza que deseja remover essa pessoa?',
  });

  dialogRef.afterClosed().subscribe((result: boolean) => {

    if(result) {

      //Se tiver conteúdo remova
      this.pessoaService.remover(pessoa.codigo).subscribe(
        () => {
          this.atualizar();
          this.snackBar.open('Pessoa removida com sucesso!', 'x', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        },
        error => this.onError('Erro ao tentar remover produto')
      );
    }

  });
  }

  atualizar() {
    this.pessoas$ = this.pessoaService.lista()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar a pessoa.');
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
