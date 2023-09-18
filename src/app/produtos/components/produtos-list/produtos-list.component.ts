import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/modelo/Produto';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit{

  @Input() produtos: Produto[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['titulo', 'preco', 'quantidade', 'acao'];

  constructor() {

  }

  ngOnInit(): void {
  }

  onAdd():any {
    this.add.emit(true);
  }

  onEdit(produto: Produto) {
    this.edit.emit(produto);
  }

}
