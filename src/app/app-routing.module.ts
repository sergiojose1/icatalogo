import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { ListagemComponent } from './shared/pages/listagem/listagem.component';
import { DetalhesComponent } from './shared/pages/detalhes/detalhes.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'detalhes', component: DetalhesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
