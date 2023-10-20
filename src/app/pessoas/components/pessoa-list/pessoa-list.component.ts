import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../../../modelo/Pessoa';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit{

  @Input() pessoas: Pessoa[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'cpf', 'acao'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd():any {
    this.add.emit(true);
  }

  onEdit(pessoa: Pessoa) {
    this.edit.emit(pessoa);
  }

  onDelete(pessoa: Pessoa) {
    this.delete.emit(pessoa);
  }

}
