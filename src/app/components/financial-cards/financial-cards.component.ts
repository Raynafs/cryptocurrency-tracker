import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../services/dashboard.service';
import { FinancialCard } from '../../models/dashboard.models';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
    selector: 'app-financial-cards',
    standalone: true,
    imports: [CommonModule, MatIconModule, CreditCardComponent],
    templateUrl: './financial-cards.component.html',
    styleUrl: './financial-cards.component.scss'
})
export class FinancialCardsComponent implements OnInit {
    cards: FinancialCard[] = [];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.cards = this.dashboardService.getFinancialCards();
    }

    formatAmount(amount: number): string {
        return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}
