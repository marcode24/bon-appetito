import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { BuilderPizzaService } from '../../services/builder-pizza.service';

@Component({
  selector: 'app-preview-pizza',
  templateUrl: './preview-pizza.component.html',
  styleUrls: ['./preview-pizza.component.scss']
})
export class PreviewPizzaComponent implements OnInit, OnDestroy {
  @ViewChild('pizza') pizza!: ElementRef;
  constructor(private builderPizza: BuilderPizzaService) { }

  private subShowIngredients: Subscription;
  private subHideAllIngredients: Subscription;

  ngOnInit(): void {
    this.subShowIngredients = this.builderPizza.showIngredient.subscribe(({ selector, show }) => {
      this.showIngredient(selector, show);
    });
    this.subHideAllIngredients = this.builderPizza.hideAllIngredients.subscribe(hide => hide
      ? this.resetBuilder()
      : ''
    );
  }

  ngOnDestroy(): void {
    this.subShowIngredients.unsubscribe();
    this.subHideAllIngredients.unsubscribe();
  }

  showIngredient(selector: string, show: boolean) {
    const ingredient = this.getIngredients()
      .find((item) => item.classList.contains(selector));
    show ? ingredient.classList.add('show') : ingredient.classList.remove('show');
  }

  resetBuilder() {
    this.getIngredients().map(item => item.classList.remove('show'));
  }

  private getIngredients(): any[] {
    return Array.of(...this.pizza.nativeElement.childNodes);
  }
}
