import { Component, Output, EventEmitter, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnChanges, OnDestroy {
    @Input('length') length!: number;
    @Output() nextPage = new EventEmitter<number>();
    @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
    @Input('pageSize') pageSize!: number;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    offset = 0;
    currentPage = 1;
    constructor() {}

    ngOnChanges(): void {
        console.log(this.pageSize);
        this.paginator.pageIndex = 0;
    }
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
