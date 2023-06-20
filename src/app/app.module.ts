import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopoComponent } from './components/header-topo/header-topo.component';
import { HomeComponent } from './components/home/home.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { ProdutoComponent } from './components/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopoComponent,
    HomeComponent,
    OrdemCompraComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
