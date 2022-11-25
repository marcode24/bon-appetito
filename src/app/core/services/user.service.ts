import { Injectable } from '@angular/core';

import Storage from '@utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  credits: number;
  creditsFree: number = 500;

  constructor() { }

  loadCreditsFromStorage(): void {
    this.credits = JSON.parse(Storage.getItem('credits')) as number || 0;
  }

  saveCredits(): void {
    Storage.saveLocalStorage('credits', JSON.stringify(this.credits));
    this.loadCreditsFromStorage();
  }

  get getCredits(): number {
    this.loadCreditsFromStorage();
    return this.credits;
  }

  discountCredits(quantity: number): void {
    this.loadCreditsFromStorage();
    this.credits -= quantity;
    this.saveCredits();
  }

  addCredits(): void {
    this.loadCreditsFromStorage();
    this.credits += this.creditsFree;
    this.saveCredits();
  }

}
