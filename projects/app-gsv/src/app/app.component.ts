import { Component } from '@angular/core';

@Component({
  selector: 'gsv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appGSV';
  sideNavStatus = true;
  validarExpandidoMenu(expandido: boolean) {
    this.sideNavStatus = expandido;
  }
}
