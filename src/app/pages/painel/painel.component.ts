import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

  constructor(private router: Router) {}
  cadastarVM() {
    this.router.navigate(['/cadastro']);
  }
}
