import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent implements OnInit {
  @Input() page: string = 'home';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickBack(): void {
    this.router.navigate([`/${this.page}`]);
  }

}
