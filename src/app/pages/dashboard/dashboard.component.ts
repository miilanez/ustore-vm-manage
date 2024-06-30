import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

interface VirtualMachines {
  displayName: string;
  cpu: number;
  memory: number;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  //carregar charts
  ngOnInit() {
    this.loadBarChart();
    this.loadPieChart();
  }

  cadastrarVms() {
    this.router.navigate(['/cadastro']);
  }

  visualizarVms() {
    this.router.navigate(['/painel']);
  }

  //função de leitura de vms
  getVirtualMachines(): VirtualMachines[] {
    return JSON.parse(localStorage.getItem('virtualmachines') || '[]');
  }

  //função de leitura de status das vms
  countStatus(vmList: VirtualMachines[], status: string): number {
    return vmList.filter((vm) => vm.status === status).length;
  }

  //chart de vms em execução

  loadBarChart() {
    //funções para identificar status das vms em execução
    const vms = this.getVirtualMachines();
    const vmsAtivas = this.countStatus(vms, 'RUNNING');
    const vmsPausadas = this.countStatus(vms, 'PAUSED');
    const vmsParadas = this.countStatus(vms, 'STOP');

    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Ativas', 'Pausadas', 'Inativas'],
        datasets: [
          {
            label: 'VMs',
            data: [vmsAtivas, vmsPausadas, vmsParadas],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  //chart de uso de vms

  loadPieChart() {
    //calculos de dados das vms para alimentar o chart
    const vms = this.getVirtualMachines();
    const totalVms = vms.length;
    const limiteVms = 20;
    const vmsUsadas = totalVms;
    const vmsDisponiveis = limiteVms - vmsUsadas;

    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Usadas', 'Disponíveis'],
        datasets: [
          {
            label: 'Uso de VMs',
            data: [vmsUsadas, vmsDisponiveis],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}
