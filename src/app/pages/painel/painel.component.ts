import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Declaração de tipos para interface das VMs
interface VirtualMachines {
  displayName: string;
  cpu: number;
  memory: number;
  status: string;
}

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  virtualmachines: VirtualMachines[] = [];

  constructor(private router: Router) {}

  //ao iniciar, carregar dados da key 'virtualmachines' no local storage
  ngOnInit() {
    const storedData = localStorage.getItem('virtualmachines');
    if (storedData) {
      this.virtualmachines = JSON.parse(storedData);
    }
  }


  //função de redirecionamento para página de cadastro
  cadastarVM() {
    this.router.navigate(['/cadastro']);
  }

  //lógica para mudança de status das máquinas virtuais
  startVm(vm: VirtualMachines) {
    if (vm.status === 'PAUSED' || vm.status === 'STOP') {
      vm.status = 'RUNNING';
      this.showMessage(`${vm.displayName} foi iniciado.`);
      this.updateLocalStorage();
    }
  }

  pauseVm(vm: VirtualMachines) {
    if (vm.status === 'RUNNING') {
      vm.status = 'PAUSED';
      this.showMessage(`${vm.displayName} foi pausado.`);
      this.updateLocalStorage();
    }
  }

  stopVm(vm: VirtualMachines) {
    if (vm.status === 'RUNNING' || vm.status === 'PAUSED') {
      vm.status = 'STOP';
      this.showMessage(`${vm.displayName} foi parado.`);
      this.updateLocalStorage();
    }
  }

  //função de exclusão de maquina virtual
  deleteVm(vm: VirtualMachines) {
    this.virtualmachines = this.virtualmachines.filter(v => v !== vm);
    this.showMessage(`${vm.displayName} foi deletado.`);
    this.updateLocalStorage();
  }

  //função de atualização de vms no localstorage
  updateLocalStorage() {
    localStorage.setItem('virtualmachines', JSON.stringify(this.virtualmachines));
  }

  showMessage(message: string) {
    alert(message);
  }
}
