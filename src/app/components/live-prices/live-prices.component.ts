import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../services/dashboard.service';
import { CryptoPrice } from '../../models/dashboard.models';

@Component({
    selector: 'app-live-prices',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './live-prices.component.html',
    styleUrl: './live-prices.component.scss'
})
export class LivePricesComponent implements OnInit {
    prices: CryptoPrice[] = [];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.prices = this.dashboardService.getLivePrices();
    }

    getSparklinePath(data: number[]): string {
        if (!data || data.length < 2) return '';
        const width = 60;
        const height = 24;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min || 1;
        const step = width / (data.length - 1);

        return data.map((val, i) => {
            const x = i * step;
            const y = height - ((val - min) / range) * height;
            return `${i === 0 ? 'M' : 'L'}${x},${y}`;
        }).join(' ');
    }

    formatPrice(price: number): string {
        return '$' + price.toLocaleString('en-US');
    }
}
