import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo: [null],
      preco: [null],
      quantidade: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('submit');
  }

  onCancelar() {
    console.log('canselar');
  }

}
