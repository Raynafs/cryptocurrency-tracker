import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FinancialCardsComponent } from './components/financial-cards/financial-cards.component';
import { ActivitySummaryComponent } from './components/activity-summary/activity-summary.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LivePricesComponent } from './components/live-prices/live-prices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    HeaderComponent,
    FinancialCardsComponent,
    ActivitySummaryComponent,
    PortfolioCardComponent,
    FavoritesComponent,
    LivePricesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
