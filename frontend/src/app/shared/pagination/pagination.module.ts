import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';

@NgModule({
    declarations: [PaginationComponent],
    entryComponents: [PaginationComponent],
    imports: [CommonModule],
    exports: [PaginationComponent],
})
export class PaginationModule {}
