import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../model/Pessoa';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit{

  @Input() pessoas: Pessoa[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
