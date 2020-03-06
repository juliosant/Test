import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './view/app-routing.module';
import { AppComponent } from './view/app.component';
import { PrincipalComponent } from './view/principal.component';
import { RootComponent } from './view/root.component';
import { RelatorioComponent } from './view/relatorio/relatorio.component';
import { RelatorioReservasComponent } from './view/relatorio/relatorio-reservas.component';
import { UsuarioComponent } from './view/register/usuario.component';
import { AdminComponent } from './view/admin/admin.component';
import { JuizoComponent } from './view/register/juizo.component';
import { RegisterComponent } from './view/register/register.component';

const appRoutes: Routes = [  
  { path: '', component: AppComponent},  
  { path: 'principal', component: PrincipalComponent,
    children: [
      {path: 'relatorios', component: RelatorioComponent,
        children: [
          {path: 'reservas', component: RelatorioReservasComponent}
        ]  
      },
      {path: 'register', component: RegisterComponent,
        children: [
          {path: 'juizo', component: JuizoComponent},
          {path: 'usuario', component: UsuarioComponent}
        ]},
      {path: 'admin', component: AdminComponent,
        children: [
          {path:'usuario', component: UsuarioComponent}
        ]}
    ] 
  }  
];
  

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RootComponent,
    RelatorioComponent,
    RelatorioReservasComponent,
    UsuarioComponent,
    AdminComponent,
    JuizoComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),  
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
