import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  public produtos:Produto[]|any
  public URL = "https://gist.githubusercontent.com/Srubens/5c10937aa90529e67ced6374db944382/raw/3245ee7cdcab30150234d5e8b5a0edaea56c00fb/db-produtos.json"

  constructor(
    private http:HttpClient
  ) { }

  public getProdutos():Promise<any|Produto[]>{
    return this.http.get<any>(`${this.URL}`)
      .toPromise()
      .then((res:HttpClient) => {
        return res
      })
  }

}
