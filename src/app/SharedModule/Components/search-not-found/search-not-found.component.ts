import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-not-found',
  templateUrl: './search-not-found.component.html',
  styleUrls: ['./search-not-found.component.css'],
})
export class SearchNotFoundComponent implements OnInit {
  @Input() textShown: string = '';
  constructor() {}

  ngOnInit(): void {}
}
