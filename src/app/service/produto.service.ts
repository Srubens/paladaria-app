import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  public produtos:Produto[]|any
  public URL = "https://paladaria.onrender.com"

  constructor(
    private http:HttpClient
  ) { }

  public getProdutos():Promise<any|Produto[]>{
    return this.http.get<any>(`${this.URL}/produtos`)
      .toPromise()
      .then((res:HttpClient) => {
        return res
      })
  }

  public getProdutoPorId(id:number):Promise<any|Produto>{
    return this.http.get<any>(`${this.URL}/produtos?id=${id}`)
               .toPromise()
               .then((res:HttpClient|any) =>{
                return res[0]
               })
  }

}
