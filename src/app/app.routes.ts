import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
