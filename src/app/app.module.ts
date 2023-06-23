import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopoComponent } from './components/header-topo/header-topo.component';
import { HomeComponent } from './components/home/home.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from '@angular/common';
import { CarrinhoService } from './service/carrinho.service';

registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopoComponent,
    HomeComponent,
    OrdemCompraComponent,
    ProdutoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
