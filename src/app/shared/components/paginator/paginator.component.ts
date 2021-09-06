import { Component, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges, OnDestroy {
  @Input('length') length!: number;
  @Output() nextPage = new EventEmitter<number>();
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  offset = 0;
  currentPage = 1;
  constructor() {}

  ngOnChanges(): void {}
  ngOnDestroy(): void {
    this.offset = 0;
  }
  changePage(event: any) {
    this.determineCurrentPage(event);
    this.nextPage.emit(this.offset);
  }
  determineCurrentPage(event: any): void {
    if (event && event.pageIndex == this.currentPage) {
      this.offset += this.pageSize;
      this.currentPage++;
    } else if (event && event.pageIndex < this.currentPage) {
      this.offset -= this.pageSize;
      this.currentPage--;
    }
  }
}
