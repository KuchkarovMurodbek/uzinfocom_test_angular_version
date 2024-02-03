import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type MenuItem = {
  id: number;
  size: number;
};

@Component({
  selector: 'app-page-size',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-size.component.html',
  styleUrl: './page-size.component.scss',
})

export class PageSizeComponent {
  menuItems: MenuItem[] = [
    { id: 0, size: 10 },
    { id: 1, size: 20 },
    { id: 2, size: 30 },
  ];


  isDropdownOpen: boolean = false;
  @Input() page_size!: number;
  @Output() pageSizeChange = new EventEmitter<number>();
 

  showSelect() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  pageSizeFunction(itemSize: number): void {
    this.pageSizeChange.emit(itemSize);
    this.isDropdownOpen=false
  }
}
