import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Tooltip,
    Legend
} from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';
import { Transaction } from '../../models/dashboard.models';

Chart.register(CategoryScale, LinearScale, BarElement, BarController, Tooltip, Legend);

@Component({
    selector: 'app-activity-summary',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatTabsModule, BaseChartDirective],
    templateUrl: './activity-summary.component.html',
    styleUrl: './activity-summary.component.scss'
})
export class ActivitySummaryComponent implements OnInit {
    transactions: Transaction[] = [];
    activeTab = 'history';

    barChartType: ChartType = 'bar';
    barChartData: ChartConfiguration['data'] = {
        labels: [],
        datasets: []
    };
    barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1e293b',
                titleFont: { size: 12 },
                bodyFont: { size: 11 },
                cornerRadius: 8,
                padding: 10
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8', font: { size: 10 } },
                border: { display: false }
            },
            y: {
                grid: { color: '#f1f5f9' },
                ticks: {
                    color: '#94a3b8',
                    font: { size: 10 },
                    callback: function (value) {
                        return (Number(value) / 1000) + 'k';
                    }
                },
                border: { display: false }
            }
        }
    };

    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        this.transactions = this.dashboardService.getTransactions();
        const chartData = this.dashboardService.getActivityChartData();
        this.barChartData = {
            labels: chartData.labels,
            datasets: [{
                data: chartData.data.map(d => d * 1000),
                backgroundColor: '#f59e0b',
                borderRadius: 4,
                barThickness: 12
            }]
        };
    }

    formatAmount(amount: number, isPositive: boolean): string {
        const prefix = isPositive ? '+ $' : '-$';
        return prefix + Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    getTransactionGroups(): { date: string; transactions: Transaction[] }[] {
        return [
            { date: '13 Sep, 2020', transactions: this.transactions.slice(0, 1) },
            { date: '10 Sep, 2020', transactions: this.transactions.slice(1, 4) },
            { date: '11 Sep, 2020', transactions: this.transactions.slice(4) }
        ];
    }
}
