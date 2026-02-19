import { Injectable } from '@angular/core';
import { Transaction, CryptoPrice, FinancialCard } from '../models/dashboard.models';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    getFinancialCards(): FinancialCard[] {
        return [
            {
                icon: 'account_balance_wallet',
                iconBgColor: '#e8f5e9',
                iconColor: '#4caf50',
                label: 'Total earnings',
                amount: 12594.10
            },
            {
                icon: 'shopping_bag',
                iconBgColor: '#fff3e0',
                iconColor: '#ff9800',
                label: 'Total Spendings',
                amount: 4596.80
            },
            {
                icon: 'groups',
                iconBgColor: '#e3f2fd',
                iconColor: '#2196f3',
                label: 'Goal for This Month',
                amount: 16196.80
            },
            {
                icon: 'savings',
                iconBgColor: '#f3e5f5',
                iconColor: '#9c27b0',
                label: 'Spending Goal',
                amount: 6126.30
            }
        ];
    }

    getTransactions(): Transaction[] {
        return [
            {
                icon: 'inventory_2',
                name: 'Office Supplies',
                date: '10 Sep, 2020 at 3:30 PM',
                categoryColor: '#f44336',
                categoryLabel: 'Supplies',
                amount: -10100.00,
                isPositive: false
            },
            {
                icon: 'send',
                name: 'Pak Transfer',
                date: '10 Sep, 2020 at 3:30 PM',
                categoryColor: '#4caf50',
                categoryLabel: 'Marketing',
                amount: 50400.00,
                isPositive: true
            },
            {
                icon: 'send',
                name: 'Salary Transfer',
                date: '10 Sep, 2020 at 3:30 PM',
                categoryColor: '#ff9800',
                categoryLabel: 'Office supplies',
                amount: -10100.00,
                isPositive: false
            },
            {
                icon: 'account_balance',
                name: 'Cash withdrawl',
                date: '10 Sep, 2020 at 3:30 PM',
                categoryColor: '#9c27b0',
                categoryLabel: 'General banking',
                amount: -20905.00,
                isPositive: false
            },
            {
                icon: 'gps_fixed',
                name: 'Target',
                date: '10 Sep, 2020 at 3:30 PM',
                categoryColor: '#2196f3',
                categoryLabel: 'Equipment',
                amount: -2340.00,
                isPositive: false
            }
        ];
    }

    getFavoriteCryptos(): CryptoPrice[] {
        return [
            {
                name: 'Bitcoin',
                ticker: 'BTC',
                price: 20788,
                change: 0.25,
                icon: 'currency_bitcoin',
                iconColor: '#f7931a',
                sparklineData: [20, 25, 22, 28, 24, 30, 27, 32, 29, 35]
            },
            {
                name: 'Ethereum',
                ticker: 'ETH',
                price: 21543,
                change: 1.56,
                icon: 'diamond',
                iconColor: '#627eea',
                sparklineData: [15, 18, 20, 17, 22, 19, 25, 23, 28, 26]
            }
        ];
    }

    getLivePrices(): CryptoPrice[] {
        return [
            {
                name: 'Binance',
                ticker: 'BNB',
                price: 18788,
                change: 0.16,
                icon: 'currency_exchange',
                iconColor: '#f3ba2f',
                sparklineData: [10, 15, 12, 18, 14, 20, 17, 22, 19, 24]
            },
            {
                name: 'Litecoin',
                ticker: 'LTC',
                price: 11657,
                change: -0.18,
                icon: 'toll',
                iconColor: '#345d9d',
                sparklineData: [20, 18, 22, 16, 20, 14, 18, 12, 16, 10]
            },
            {
                name: 'Ethereum',
                ticker: 'ETH',
                price: 21543,
                change: 1.56,
                icon: 'diamond',
                iconColor: '#627eea',
                sparklineData: [12, 16, 14, 20, 18, 24, 22, 28, 26, 30]
            },
            {
                name: 'Bitcoin',
                ticker: 'BTC',
                price: 20788,
                change: 0.25,
                icon: 'currency_bitcoin',
                iconColor: '#f7931a',
                sparklineData: [22, 26, 24, 30, 28, 34, 32, 38, 36, 40]
            }
        ];
    }

    getActivityChartData() {
        return {
            labels: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
            data: [5, 8, 6, 12, 15, 10, 7, 14, 9, 11, 13, 8, 6, 10, 12, 9, 7, 11, 8]
        };
    }
}
