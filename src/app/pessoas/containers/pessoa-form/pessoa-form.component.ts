import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';
import { Pessoa } from '../../../modelo/Pessoa';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoasService: PessoasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      codigo: [0],
      nome: [''],
      cpf: ['']
    });
  }

  ngOnInit(): void {
    const pessoa: Pessoa = this.route.snapshot.data['pessoa'];
    this.form.setValue({
      codigo: pessoa.codigo,
      nome: pessoa.nome,
      cpf: pessoa.cpf
    });
  }

  onSubmit() {
    console.log('onSubmit: ',this.form.value);
    this.pessoasService.salvar(this.form.value)
    .subscribe(resultado => this.onSucess(), error => this.onError());

  }

  onCancelar() {
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Pessoa salva com sucesso!', '', { duration: 5000});
    this.onCancelar();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar a pessoa.', '', { duration: 5000});
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
