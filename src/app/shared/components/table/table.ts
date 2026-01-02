import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input,  } from '@angular/core';

interface Column{
  label:string;
  key:string;
  pipe?:'currency'| 'date';
}

@Component({
  selector: 'app-table',
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: Column[] = [];
}
