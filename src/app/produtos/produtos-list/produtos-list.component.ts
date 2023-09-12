import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/modelo/Cliente';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit{

  @Input() produtos: Produto[] = [];

  readonly displayedColumns = ['titulo', 'preco', 'quantidade', 'acao'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }

  onAdd():any {
    this.router.navigate(['novo'], { relativeTo: this.route});
  }

}
