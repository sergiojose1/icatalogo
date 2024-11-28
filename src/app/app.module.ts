import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { ListagemComponent } from './shared/pages/listagem/listagem.component';
import { DetalhesComponent } from './shared/pages/detalhes/detalhes.component';

import { HighlightDirective } from './shared/directives/highlight.directive';
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'detalhes', component: DetalhesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemComponent,
    DetalhesComponent,
    HighlightDirective,
    TooltipDirective,
    DateFormatPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
