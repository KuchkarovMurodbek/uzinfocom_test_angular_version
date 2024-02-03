import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-boolean-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './boolean-select.component.html',
  styleUrl: './boolean-select.component.scss',
})
export class BooleanSelectComponent {

  @Input({required:true}) title!:string
  @Input({required:true}) value!:string
  @Output() onBooleanSelect=new EventEmitter<string>()

  values = [
    { id: "true", name: 'Yes' },
    { id: "false", name: 'No' },
  ];

  onSelectChange() {
    this.onBooleanSelect.emit(this.value);
  }
}
