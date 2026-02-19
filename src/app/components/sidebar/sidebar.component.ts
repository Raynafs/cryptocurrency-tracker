import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    activeNav = 'home';

    topNavItems = [
        { icon: 'home', id: 'home', label: 'Home' },
        { icon: 'credit_card', id: 'cards', label: 'Cards' },
        { icon: 'account_balance_wallet', id: 'wallet', label: 'Wallet' },
        { icon: 'currency_bitcoin', id: 'crypto', label: 'Crypto' },
        { icon: 'settings', id: 'settings', label: 'Settings' },
        { icon: 'play_circle', id: 'play', label: 'Play' },
        { icon: 'history', id: 'history', label: 'History' },
        { icon: 'swap_vert', id: 'transfers', label: 'Transfers' },
    ];

    menuItems = [
        { icon: 'calendar_month', label: 'Monthly Plan' },
        { icon: 'settings', label: 'Settings' },
        { icon: 'flag', label: 'Goals' },
        { icon: 'shopping_cart', label: 'Shopping' },
    ];

    setActive(id: string) {
        this.activeNav = id;
    }
}
