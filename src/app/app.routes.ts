import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllTradesTableComponent } from './all-trades-table/all-trades-table.component';
import { TradeIdeasComponent } from './trade-ideas/trade-ideas.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'all_trades', component: AllTradesTableComponent },
    { path: 'trade_ideas', component: TradeIdeasComponent},
    {  path: '**', redirectTo: '/dashboard' }
];