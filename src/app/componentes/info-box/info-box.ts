import { Component, input } from '@angular/core';

export type TInfoBox = {
  tipo: string;
  texto: string;
  valor: number;
  icon: string;
};

@Component({
  selector: 'app-info-box',
  template: `
    <div class="info-box shadow">
      <span class="info-box-icon text-bg-{{ data().tipo }} shadow-sm">
        <i class="bi bi-{{ data().icon }}"></i>
      </span>
      <div class="info-box-content">
        <span class="info-box-text text-capitalize">{{ data().texto }}</span>
        <span class="info-box-number">{{ data().valor }}</span>
      </div>
    </div>
  `,
})
export class InfoBoxComponent {
  data = input.required<TInfoBox>();
}
