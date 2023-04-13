import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent {
  @Input() page = 'home';
  constructor(
    private router: Router
  ) { }

  clickBack(): void {
    this.router.navigate([`/${this.page}`]);
  }

}
