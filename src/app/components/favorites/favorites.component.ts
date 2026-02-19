import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../services/dashboard.service';
import { CryptoPrice } from '../../models/dashboard.models';

@Component({
    selector: 'app-favorites',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
    favorites: CryptoPrice[] = [];

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.favorites = this.dashboardService.getFavoriteCryptos();
    }

    getSparklinePath(data: number[]): string {
        if (!data || data.length < 2) return '';
        const width = 80;
        const height = 30;
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
