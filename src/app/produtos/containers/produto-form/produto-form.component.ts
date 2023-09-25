import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/modelo/Produto';

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
    private location: Location,
    private route: ActivatedRoute
    ){
    this.form = this.formBuilder.group({
      codigo: [0],
      titulo: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      preco: [0,[
        Validators.required
      ]],
      quantidade: ['']
    });
  }

  ngOnInit(): void {
    const produto: Produto = this.route.snapshot.data['produto'];
    this.form.setValue({
      codigo: produto.codigo,
      titulo: produto.titulo,
      preco: produto.preco,
      quantidade: produto.quantidade
    });
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

  getErrorMessage(campoNome: string) {
    const campo = this.form.get(campoNome);

    if(campo?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if(campo?.hasError('minlength')) {
      const requiredLength = campo.errors ? campo.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if(campo?.hasError('maxlength')) {
      const requiredLength = campo.errors ? campo.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }

}
