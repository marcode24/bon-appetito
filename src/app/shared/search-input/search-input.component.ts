import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() value: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter();
  private valueTemp: string;

  setValueTemp(element: any): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.valueTemp = element.value.trim();
    if(this.valueTemp !== this.value && this.valueTemp.length > 1) {
      this.search.emit(this.valueTemp);
    }
  }

  emitValue(value: string) {
    this.search.emit(value);
  }

}
