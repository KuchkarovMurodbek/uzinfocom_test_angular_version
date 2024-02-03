import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

interface ColourOption {
  readonly id: string;
  readonly name: string;
  readonly color: string;
}


@Component({
  selector: 'app-difficulty-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './difficulty-select.component.html',
  styleUrl: './difficulty-select.component.scss'
})
export class DifficultySelectComponent {
   @Input({required:true})value!:string
   @Output() onDifficulty=new EventEmitter<string>
   
   options: readonly ColourOption[] = [
    { id: "1", name: "Beginner", color: "#028595" },
    { id: "2", name: "Basic", color: "#1b7f49" },
    { id: "3", name: "Normal", color: "#2c3e98" },
    { id: "4", name: "Medium", color: "#2c3e98" },
    { id: "5", name: "Advanced", color: "#a3662d" },
    { id: "6", name: "Hard", color: "#963739" },
    { id: "7", name: "Extremal", color: "#fff" },
  ];

  onSelectChange(){
    this.onDifficulty.emit(this.value)
  }
}
