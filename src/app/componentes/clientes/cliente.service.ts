import { Injectable, signal } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private _clientes = signal<Cliente[]>([]);
  public readonly clientes = this._clientes.asReadonly;

  constructor() {
    this._clientes.set([
      {
        id: '1',
        nombre: 'juan',
        apellido: 'lopez',
        email: 'juanlopez@gmail.com',
        saldo: 256.33,
      },
      {
        id: '2',
        nombre: 'ana',
        apellido: 'barbara',
        email: 'anabarbara@gmail.com',
        saldo: 106.99,
      },
    ]);
  }
}
