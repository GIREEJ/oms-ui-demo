import { Component, signal } from '@angular/core';
import { Card } from "../../../shared/components/card/card";

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  totalProducts = signal(3);
  totalOrders = signal(6);
  revenue = signal(5600);
}
