import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Output()
  nextPage = new EventEmitter();

  @Output()
  prevPage = new EventEmitter();

  @Input()
  page!: number;

  @Input()
  totalPages!: number;

  @Input()
  lastPage!: boolean;

  handleNextPage() {
    this.nextPage.emit();
  }
  handlePrevPage() {
    this.prevPage.emit();
  }

  isFirstPage(): boolean {
    return this.page <= 0;
  }
}
