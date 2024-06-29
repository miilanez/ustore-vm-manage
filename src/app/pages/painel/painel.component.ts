import { Component } from '@angular/core';
import { Router } from '@angular/router';

//declaração de tipos para interface das VMs
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

  //Array de objetos das VMs
  virtualmachines:VirtualMachines[] = [
    { displayName: 'vm1', cpu: 2, memory: 1024, status: "RUNNING" },
    { displayName: 'vm2', cpu: 1, memory: 512, status: "PAUSED" },
    { displayName: 'vm3', cpu: 4, memory: 2048, status: "STOP" }
  ];


  //lógica para mudança de status das VMs
  startVm(vm: VirtualMachines) {
    if (vm.status === 'PAUSED' || vm.status === 'STOP') {
      vm.status = 'RUNNING';
      this.showMessage(`${vm.displayName} foi iniciado.`);
    }
  }

  pauseVm(vm: VirtualMachines) {
    if (vm.status === 'RUNNING') {
      vm.status = 'PAUSED';
      this.showMessage(`${vm.displayName} foi pausado.`);
    }
  }

  stopVm(vm: VirtualMachines) {
    if (vm.status === 'RUNNING' || vm.status === 'PAUSED') {
      vm.status = 'STOP';
      this.showMessage(`${vm.displayName} foi parado.`);
    }
  }

  deleteVm(vm: VirtualMachines) {
    this.virtualmachines = this.virtualmachines.filter(v => v !== vm);
    this.showMessage(`${vm.displayName} foi deletado.`);
  }

  showMessage(message: string) {
    alert(message);
  }

}
