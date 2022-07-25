import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent implements OnInit {
  @Input() Title: string = '';
  @Input() Text: string = '';
  @Input() pageUrl: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goback() {
    this.router.navigate(['../home']);
  }
}
