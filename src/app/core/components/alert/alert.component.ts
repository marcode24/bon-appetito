import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '@services/alert.service';

import { IAlert } from '@interfaces/alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  subcriptionAlert: Subscription;
  @ViewChild('alert') alert: ElementRef;

  alertOptions: IAlert = { message: '', type: 'success' };

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnDestroy(): void {
    this.subcriptionAlert.unsubscribe();
  }

  ngOnInit(): void {
    this.subcriptionAlert = this.alertService.alert.subscribe(alert => this.showAlert(alert));
  }

  showAlert(alert: IAlert): void {
    this.alertOptions = alert;
    this.alert.nativeElement.classList.add('show');
    setTimeout(() => {
      this.hideAlert();
    }, 3000);
  }

  hideAlert(): void {
    this.alert.nativeElement.classList.remove('show');
  }
}
