import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Input({required:true}) placeholder: string = '';
  @Output() onSearch=new EventEmitter<string>()

  setValue(event: KeyboardEvent): void {
    this.onSearch.emit((event.target as HTMLInputElement).value)
  }
}
