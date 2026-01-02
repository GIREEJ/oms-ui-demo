import { Component, signal } from '@angular/core';
import { reportsMock } from '../../../shared/models/mock/reports.mock';
import { TableComponent } from "../../../shared/components/table/table";

@Component({
  selector: 'app-reports-list',
  imports: [TableComponent],
  templateUrl: './reports-list.html',
  styleUrl: './reports-list.scss',
})
export class ReportsList {
    reports = signal(reportsMock)

    columns = [
      {label: 'Report ID ', key: 'id'},
      {label: 'Product ID ', key: 'productId'},
      {label: 'Total Sold ', key: 'totalSold'},
      {label: 'Total Revenue ', key: 'totalRevenue', pipe:'currency' as const},
    ];
}
