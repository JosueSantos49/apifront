import { Component } from '@angular/core';
import { Produto } from '../modelo/Cliente';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objeto do tipo Produto
  produto = new Produto();

  //Variáveis para visibilidade dos botões
  btnCadastro:boolean = true;

  //Variável para visibilidade da tabela
  tabela:boolean = true;

  //JSON de produtos (Armazenar os produtos que vem da API)
  produtos:Produto[] = [];

  //Contrutor
  constructor(private servico:ProdutoService){}

  //Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.produtos = retorno);
  }

  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.produto)
    .subscribe(retorno => {

      //Cadastrar o cliente no vetor
      this.produtos.push(retorno);

      //Limpar formulário
      this.produto = new Produto();

      //Mensagem
      alert('Produto cadastrado com sucesso!');
    });
  }

  //Método para selecionar um produto específico
  selecionarProduto(posicao:number):void{

    //Selecionar produto no vetor
    this.produto = this.produtos[posicao];

    //Visibilidade dos botões
    this.btnCadastro = false;

    //Visibilidade da tabel
    this.tabela = false;

  }

  //Método para editar produtos
  editar():void{

    this.servico.editar(this.produto)
    .subscribe(retorno => {

      //Obter posição do vetor onde está o produto
      let posicao = this.produtos.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      //Alterar os dados do produto no vetor
      this.produtos[posicao] = retorno;

      //Limpar formulário
      this.produto = new Produto();

      //Visibilidade dos botões
      this.btnCadastro = true;

      //Visibilidade da tabel
      this.tabela = true;

      //Mensagem
      alert('Produto alterado com sucesso!');

    });
  }

  //Método para remover produtos
  remover():void{

    this.servico.remover(this.produto.codigo)
    .subscribe(retorno => {

      //Obter posição do vetor onde está o produto
      let posicao = this.produtos.findIndex(obj => {
        return obj.codigo == this.produto.codigo;
      });

      //Remover produto do vetor
      this.produtos.splice(posicao, 1);

      //Limpar formulário
      this.produto = new Produto();

      //Visibilidade dos botões
      this.btnCadastro = true;

      //Visibilidade da tabel
      this.tabela = true;

      //Mensagem
      alert('Produto removido com sucesso!');

    });
  }

  //Método para cancelar
  cancelar():void{

    //Limpar formulário
    this.produto = new Produto();

    //Visibilidade dos botões
    this.btnCadastro = true;

    //Visibilidade da tabel
    this.tabela = true;
  }

  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
