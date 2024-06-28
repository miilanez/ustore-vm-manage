import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadBarChart();
    this.loadPieChart();
  }

  cadastrarVms() {
    this.router.navigate(['/cadastro']);
  }

  visualizarVms() {
    this.router.navigate(['/painel']);
  }

  loadBarChart() {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Ativas','Pausadas', 'Inativas'],
        datasets: [
          {
            label: 'VMs',
            data: [12, 3, 5],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  loadPieChart() {
    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Usadas', 'Disponíveis'],
        datasets: [
          {
            label: 'Uso de VMs',
            data: [70, 30],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
}
