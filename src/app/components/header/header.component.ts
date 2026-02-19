import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatSelectModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    selectedAccount = 'main';
}
