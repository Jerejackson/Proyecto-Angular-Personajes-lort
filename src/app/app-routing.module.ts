import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoCarouselComponent } from './catalogo-carousel/catalogo-carousel.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DetallePersonajeComponent },
  { path: 'personajes', component: CatalogoComponent },
  { path: 'personajes-carousel', component: CatalogoCarouselComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
