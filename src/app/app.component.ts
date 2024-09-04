import { Component } from '@angular/core';

@Component({
  selector: 'appAng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class appC {
  itemAtual = 'Monitor';
  numAtual = 10;
  imageUrl: any = 'https://i.ibb.co/fDWsn3G/buck.jpg';
  imagePath = 'assets/mona.jpg';
  // = 'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg';

  items = ['Batata Frita', 'Hamburguer', 'milk shake', 'cookie'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
