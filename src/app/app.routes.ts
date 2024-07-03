import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTradesComponent } from './all-trades/all-trades.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'all_trades', component: AllTradesComponent },
    {  path: '**', redirectTo: '/dashboard' }
];
