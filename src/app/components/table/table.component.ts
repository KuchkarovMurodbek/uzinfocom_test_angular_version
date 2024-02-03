import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TContest } from '../../types';
import { LevelPipe } from '../../pipes/level.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,LevelPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data!:TContest[]
  @Input() sort!:{order:string,is_order:boolean}
  @Output() sort_output=new EventEmitter<{order:string,is_order:boolean}>()

   Header = [
    { id: 1, title: "ID", ordering: "id", style: "w-[50px]", icon: "" },
    { id: 2, title: "Title", ordering: "title", icon: "" },
    { id: 3, title: "Tags", ordering: "", icon:"" },
    { id: 4, title: "Difficulty", ordering: "difficulty", icon: "" },
    { id: 5, title: "Rating", ordering: "rating", icon:"" },
    { id: 6, title: "Attempts", ordering: "solved", icon: "" },
  ];


  sortFunction(value:string){
      this.sort_output.emit({order:value,is_order:!this.sort.is_order})
  }
}
