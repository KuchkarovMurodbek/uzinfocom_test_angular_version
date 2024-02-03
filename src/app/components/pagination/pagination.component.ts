import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Output() onPage=new EventEmitter<number>()
  @Input({required:true}) pagesCount:number=1
  @Input({required:true,alias:"active_page"}) active_page!:number
 
  pagesToShow=5

  getPagesArray(): number[] {
    const totalPageArray = Array.from({ length: this.pagesCount }, (_, i) => i + 1);
  
    if (this.pagesCount <= this.pagesToShow) {
      return totalPageArray;
    }
  
    const firstPages = totalPageArray.slice(0, this.pagesToShow - 1);
    const lastPages = totalPageArray.slice(-1);
  
    return [...firstPages, 0, ...lastPages];
  }

  setPage(page:number){
    this.onPage.emit(page)
  }

  nextPage(){
    this.onPage.emit(this.active_page+1)
  }
  prevPage(){
    this.onPage.emit(this.active_page-1)
  }
}
