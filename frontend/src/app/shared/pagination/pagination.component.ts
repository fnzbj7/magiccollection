import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
    @Input() page!: number;
    @Input() pageSize!: number;
    @Input() collectionSize!: number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    Arr = Array;
    paginationsNum = 0;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.pageSize || changes.collectionSize) {
            this.paginationsNum =
                Math.floor(this.collectionSize / this.pageSize) +
                (this.collectionSize % this.pageSize === 0 ? 0 : 1);

            if (this.paginationsNum < this.page) {
                setTimeout(() => this.pageChange.emit(this.paginationsNum), 0);
            } else if (this.paginationsNum > 0 && this.page === 0) {
                setTimeout(() => this.pageChange.emit(1), 0);
            }
        }
    }

    onClick(selectedPage: number) {
        this.pageChange.emit(selectedPage);
    }
}
