import { Component, inject } from '@angular/core';
import { InfoBoxComponent, TInfoBox } from '../../componentes/info-box/info-box';
import { Clientes } from '../../componentes/clientes/clientes';
import { ClienteService } from '../../componentes/clientes/cliente.service';

@Component({
  selector: 'app-tablero',
  imports: [InfoBoxComponent, Clientes],
  templateUrl: './tablero.html',
  styles: ``,
})
export class Tablero {
  private clientes = inject(ClienteService).clientes();

  boxClientes: TInfoBox = {
    tipo: 'success',
    texto: 'total clientes',
    valor: this.clientes().length,
    icon: 'people-fill',
  };

  boxSaldo: TInfoBox = {
    tipo: 'info',
    texto: 'saldo total',
    valor: this.clientes().reduce((total, clientes) => total + clientes.saldo, 0),
    icon: 'cash',
  };

  constructor() {}
}
