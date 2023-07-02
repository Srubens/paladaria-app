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

    this.trocarFoto()

  }

  public addItemCarrinho():void{
    this.carrinhoService.addItem(this.produto)
  }

  trocarFoto():void{
    let tela:any = document.querySelector("#tela")
    let fotos:any = document.querySelectorAll(".foto")
    fotos.forEach((foto:any) =>{
      foto.addEventListener("click",(event:any)=>{
        document.querySelector("#tela img")?.remove()
        let newElement = event.target
        let cloneElement = newElement.cloneNode(true)
        tela.appendChild(cloneElement)
      })
    })
  }

}

