import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() disable = false;
  @Input() cart = false;
  @Input() quantity = 1;
  @Output() newQuantity: EventEmitter<number> = new EventEmitter();
  @Output() delete: EventEmitter<boolean> = new EventEmitter();

  deleteItem(): void {
    this.delete.emit(true);
  }

  changeQuantity(value: number) {
    if(this.quantity === 1 && value < 1 || this.disable) return;
    this.quantity += value;
    this.newQuantity.emit(this.quantity);
  }

}
