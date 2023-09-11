import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private snackBar: MatSnackBar,
    private location: Location
    ){
    this.form = this.formBuilder.group({
      titulo: [null],
      preco: [null],
      quantidade: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.produtosService.salvar(this.form.value)
    .subscribe(resultado => this.onSucess(), error => this.onError());
    //console.log(this.form.value);
  }

  onCancelar() {
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Produto salvo com sucesso!', '', { duration: 5000});
    this.onCancelar();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar produto.', '', { duration: 5000});
  }

}
