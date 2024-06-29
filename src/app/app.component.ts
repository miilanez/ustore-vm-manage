import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //definindo dados a serem iniciados junto com a aplicação
  ngOnInit() {
    const mockData = [
      { displayName: 'vm1', cpu: 2, memory: 1024, status: 'RUNNING' },
      { displayName: 'vm2', cpu: 1, memory: 512, status: 'PAUSED' },
      { displayName: 'vm3', cpu: 4, memory: 2048, status: 'STOP' },
    ];

    //verificando se virtualmachines existe no localstroage
    const storedData = localStorage.getItem('virtualmachines');

    //caso exista, verificar se os dados são um array vazio, se for, remover a key 'virtualmachines'
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData) && parsedData.length === 0) {
        localStorage.removeItem('virtualmachines');
      }
    }

    //caso não exista, armazenar os dados mockados no localstorage
    if (!localStorage.getItem('virtualmachines')) {
      localStorage.setItem('virtualmachines', JSON.stringify(mockData));
    }
  }
}
