import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface VirtualMachines {
  displayName: string;
  cpu: number;
  memory: number;
  status: string;
}

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


  virtualmachines:VirtualMachines[] = [
    { displayName: 'vm1', cpu: 2, memory: 1024, status: "RUNNING" },
    { displayName: 'vm2', cpu: 1, memory: 512, status: "PAUSED" },
    { displayName: 'vm3', cpu: 4, memory: 2048, status: "STOP" }
  ];

}
