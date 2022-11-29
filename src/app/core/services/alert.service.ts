import { EventEmitter, Injectable } from '@angular/core';
import { IAlert } from '@interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: EventEmitter<IAlert> = new EventEmitter();

  constructor() { }

  emitAlert(alert: IAlert): void {
    this.alert.emit(alert);
  }

}
