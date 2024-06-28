import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    const validEmail = 'admin@admin.com';
    const validPassword = 'password';


    //Regras para validação do login
    if (this.email === validEmail && this.password === validPassword) {
    //redirecionamento para o dashboard após login
      this.router.navigate(['/dashboard']);
    //em caso de falha, mensagem de erro de credenciais
    } else {
      this.errorMessage = 'Credenciais de acesso inválidas. Tente novamente.';
    }
  }
}
