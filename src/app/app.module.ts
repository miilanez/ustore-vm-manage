import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PainelComponent } from './pages/painel/painel.component';

import { appRoutes } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VoltarComponent } from './components/button/voltar/voltar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CadastroComponent,
    PainelComponent,
    NavComponent,
    VoltarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
