import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Declaração de tipos para interface das VMs
interface VirtualMachines {
  displayName: string;
  cpu: number;
  memory: number;
  status: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  vm: VirtualMachines = {
    displayName: '',
    cpu: 0,
    memory: 0,
    status: 'RUNNING'
  };

  constructor(private router: Router) {}

  navigateToPainel() {
    this.router.navigate(['/painel']);
  }

  onSubmit() {
    const storedVms = JSON.parse(localStorage.getItem('virtualmachines') || '[]');
    if (storedVms.length >= 5) {
      alert('O limite de 5 VMs foi atingido.');
      return;
    }

    storedVms.push(this.vm);
    localStorage.setItem('virtualmachines', JSON.stringify(storedVms));
    alert('VM cadastrada com sucesso!');
    this.router.navigate(['/painel']);
  }
}
