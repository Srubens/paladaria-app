import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/service/carrinho.service';

@Component({
  selector: 'app-header-topo',
  templateUrl: './header-topo.component.html',
  styleUrls: ['./header-topo.component.css']
})
export class HeaderTopoComponent implements OnInit {
  contador:number = 0
  constructor(
    public carrinhoService:CarrinhoService
  ){}
  ngOnInit(): void {}
  public getCountCart():number{
    this.contador = this.carrinhoService.getCount()
    return this.contador
  }
}
