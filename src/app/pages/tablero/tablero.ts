import { Component } from '@angular/core';
import { InfoBoxComponent, TInfoBox } from '../../componentes/info-box/info-box';

@Component({
  selector: 'app-tablero',
  imports: [InfoBoxComponent],
  templateUrl: './tablero.html',
  styles: ``,
})
export class Tablero {
  boxClientes: TInfoBox = {
    tipo: 'success',
    texto: 'total clientes',
    valor: 0,
    icon: 'people-fill',
  };

  boxSaldo: TInfoBox = {
    tipo: 'info',
    texto: 'saldo total',
    valor: 0,
    icon: 'cash',
  };

  constructor() {
    this.boxClientes.valor = 20;
  }
}
