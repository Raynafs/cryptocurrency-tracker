import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-portfolio-card',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule],
    templateUrl: './portfolio-card.component.html',
    styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent { }
