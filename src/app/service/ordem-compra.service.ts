import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Observable, map } from 'rxjs'
import { Pedido } from '../shared/pedido.model';

@Injectable()
export class OrdemCompraService {
  public URL = process.env['APIWHATS']

  constructor(
    public carrinhoService:CarrinhoService,
    private http:HttpClient
  ) { }

  public efetivarCompra(pedido:Pedido):Observable<any>{
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'SecretKey': 'SECRETKEY',
      'PublicToken': 'PUBLICTOKEN',
      'DeviceToken': 'DEVICETOKEN',
      'Authorization': 'AUTHORIZATION'
    })
    let valorTotal = this.carrinhoService.totalCarrinhoCompras()
    let msg = `Ola Nome.\nPedido feito foi:\n${pedido.itens.map((item) => item.titulo)},\nDescriação do pedido: ${pedido.itens.map((item) => {
      return `${item.desc} Quantidade: ${item.quantidade}`
    })},\n${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}\nSeu pedido já foi anotado e esta sendo finalizado.\nEm X minutos vai ser entregue
    `
    delete pedido.itens[0].img
    // console.log(pedido)
    // console.log(this.http)
    let teste = {"number":'NUMBER', "text": msg}
    return this.http.post(
      `${this.URL}/whatsapp/sendText`,
      (teste),
      ({headers:headers})
    ).pipe(map((resposta:any) =>{
      //console.log(resposta)
      resposta
    }))
  }

}
