import { Produto } from './../../modelo/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

produtos: Produto[] = [];
displayedColumns = ['titulo', 'preco', 'quantidade'];

constructor(){
  //this.produtos = [];
}

ngOnInit(): void {

}

}
