import { Component, inject } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: './clientes.html',
  styles: `
    .floating-btn {
      width: 50px;
      height: 50px;
      position: fixed;
      bottom: 30px;
      right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      z-index: 100;
    }

    .floating-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    .floating-btn:active {
      transform: scale(0.95);
    }
  `,
})
export class Clientes {
  clientes = inject(ClienteService).clientes();

  agregarCliente() {
    console.log('Agregando nuevo cliente');
    // Aquí puedes agregar la lógica para abrir un modal o formulario
  }
}
