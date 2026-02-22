import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertQueueComponent } from './components/alert-queue/alert-queue.component';
import { AlertDetailComponent } from './components/alert-detail/alert-detail.component';

export const routes: Routes = [
  { path: '',        component: DashboardComponent },
  { path: 'dashboard',   component: DashboardComponent },
  { path: 'alert-queue', component: AlertQueueComponent },
  { path: 'alert/:id',   component: AlertDetailComponent },  // ← New route
  { path: '**',      component: DashboardComponent }
];
