import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { AllTradesTableDataSource, AllTradesTableItem } from './all-trades-table-datasource';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-all-trades-table',
  templateUrl: './all-trades-table.component.html',
  styleUrl: './all-trades-table.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AllTradesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AllTradesTableItem>;

  constructor(private dataService: DataService) {}

  dataSource = new AllTradesTableDataSource(this.dataService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'date', 'time', 'ticker', 'action', 'quantity', 'price'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
