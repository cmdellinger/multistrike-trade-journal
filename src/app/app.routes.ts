import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTradesTableComponent } from './all-trades-table/all-trades-table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'all_trades', component: AllTradesTableComponent },
    {  path: '**', redirectTo: '/dashboard' }
];
