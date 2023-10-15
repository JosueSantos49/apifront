import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit{

  //form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private produtosService: ProdutosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
