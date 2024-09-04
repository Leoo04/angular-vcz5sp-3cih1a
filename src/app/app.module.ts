import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { appC } from './app.component';
import { DemoComponent } from './imagem/imagem.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    appC,
    ItemTesteComponent,
    ItemDetailComponent,
    DemoComponent,
    ItemOutputComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
