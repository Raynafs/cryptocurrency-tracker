export interface Transaction {
    icon: string;
    name: string;
    date: string;
    categoryColor: string;
    categoryLabel: string;
    amount: number;
    isPositive: boolean;
}

export interface CryptoPrice {
    name: string;
    ticker: string;
    price: number;
    change: number;
    icon: string;
    iconColor: string;
    sparklineData: number[];
}

export interface FinancialCard {
    icon: string;
    iconBgColor: string;
    iconColor: string;
    label: string;
    amount: number;
}
