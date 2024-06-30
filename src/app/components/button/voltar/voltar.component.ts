import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'voltar-button',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.scss']
})
export class VoltarComponent {
  icon=faAngleLeft;

  constructor(private location: Location) {}

  voltar(): void {
    this.location.back();
  }
}
