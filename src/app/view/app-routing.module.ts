import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal.component';


const appRoutes: Routes = [  
  { path: '', component: AppComponent},  
  { path: 'principal', component: PrincipalComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
