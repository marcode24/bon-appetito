import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() disable: boolean = false;
  @Input() cart: boolean = false;
  @Input() quantity: number = 1;
  @Output() newQuantity: EventEmitter<number> = new EventEmitter();
  @Output() delete: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(): void {
    this.delete.emit(true);
  }

  changeQuantity(value: number) {
    if(this.quantity === 1 && value < 1 || this.disable) return;
    this.quantity += value;
    this.newQuantity.emit(this.quantity);
  }

}
