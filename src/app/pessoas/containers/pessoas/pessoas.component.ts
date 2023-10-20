import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pessoa } from '../../../modelo/Pessoa';
import { PessoasService } from '../../services/pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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

  }

  onRemover(pessoa: Pessoa){

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
