import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/shared/produto.model';
import 'rxjs'
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers:[
    ProdutoService
  ]
})
export class ProdutoComponent implements OnInit {
  produto:Produto|any
  constructor(
    private route:ActivatedRoute,
    private produtoService:ProdutoService,
    private carrinhoService:CarrinhoService
  ){}

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) =>{
      this.produtoService.getProdutoPorId(params['id'])
          .then((produto:Produto) =>{
            this.produto = produto
          })
    })

  }

  public addItemCarrinho():void{
    this.carrinhoService.addItem(this.produto)
  }

}
