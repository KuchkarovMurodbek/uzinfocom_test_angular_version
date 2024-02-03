import { Routes } from '@angular/router';
import { ContestComponent } from './pages/contest/contest.component';

export const routes: Routes = [
  { path: '', component: ContestComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
