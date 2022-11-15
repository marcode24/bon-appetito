import { Component, OnInit } from '@angular/core';
import { IPizza } from '@components/interfaces/pizza.interface';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.scss']
})
export class BuildPizzaComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  addPizzaToCart(newPizza: IPizza): void {
    console.log({newPizza});
  }

}
