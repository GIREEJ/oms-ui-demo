import { Component, signal } from '@angular/core';
import { ordersMock } from '../../../shared/models/mock/orders.mock';
import { TableComponent } from '../../../shared/components/table/table';


@Component({
  selector: 'app-orders-list',
  imports: [TableComponent],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss',
})
export class OrdersList {
    orders = signal(ordersMock); 

    columns= [
      {label: 'Order ID', key: 'id'},
      {label: 'Customer ID', key:'userId'},
      {label: 'Product ID', key:'productId'},
      {label: 'Quantity', key:'quantity'},
      {label: 'Total Price', key:'totalPrice', pipe:'currency' as const},
      {label: 'Date', key:'date', pipe:'date' as const}
    ];
}
