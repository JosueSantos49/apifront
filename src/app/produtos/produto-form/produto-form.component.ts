import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
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
    .subscribe(resultado => console.log(resultado), error => this.onError()
      //console.log(error)
    );

    //console.log(this.form.value);
  }

  onCancelar() {
    console.log('canselar');
  }

  private onError(){
    this.snackBar.open('Erro ao salvar produto.', '', { duration: 1000});
  }

}
