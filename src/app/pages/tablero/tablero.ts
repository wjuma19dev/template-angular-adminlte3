import { Component } from '@angular/core';
import { InfoBoxComponent, TInfoBox } from '../../componentes/info-box/info-box';
import { Clientes } from '../../componentes/clientes/clientes';

@Component({
  selector: 'app-tablero',
  imports: [InfoBoxComponent, Clientes],
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
