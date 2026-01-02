import { Component, signal } from '@angular/core';
import { productsMock } from '../../../shared/models/mock/products.mock';
import { TableComponent } from '../../../shared/components/table/table';

@Component({
  selector: 'app-products-list',
  imports: [TableComponent],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {
  products = signal(productsMock)

  columns = [
    {label: 'ID', key: 'id'},
    {label: 'Name', key: 'name'},
    {label: 'Price', key: 'price', pipe: 'currency' as const},
    {label: 'Stock', key: 'stock'}
  ];
}
