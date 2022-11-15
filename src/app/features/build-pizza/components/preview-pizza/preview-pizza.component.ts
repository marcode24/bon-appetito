import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BuilderPizzaService } from '../../services/builder-pizza.service';

@Component({
  selector: 'app-preview-pizza',
  templateUrl: './preview-pizza.component.html',
  styleUrls: ['./preview-pizza.component.scss']
})
export class PreviewPizzaComponent implements OnInit {
  @ViewChild('pizza') pizza!: ElementRef;
  constructor(private builderPizza: BuilderPizzaService) { }

  ngOnInit(): void {
    this.builderPizza.showIngredient.subscribe(({ selector, show }) => {
      this.showIngredient(selector, show);
    });
  }

  showIngredient(selector: string, show: boolean) {
    const ingredient = Array.of(...this.pizza.nativeElement.childNodes)
      .find((item) => item.classList.contains(selector));
    show ? ingredient.classList.add('show') : ingredient.classList.remove('show');
  }

}
