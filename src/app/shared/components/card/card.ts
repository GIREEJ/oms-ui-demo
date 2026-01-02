import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  @Input() title!: string;
  @Input() value!: number | string;
  @Input() pipe?: 'currency';
}
