import { Component, OnInit } from '@angular/core';
import { CarusalService } from 'src/app/Services/CarusalService/carusal.service';

@Component({
  selector: 'app-carusal',
  templateUrl: './carusal.component.html',
  styleUrls: ['./carusal.component.css'],
})
export class CarusalComponent implements OnInit {
  public listShown: string[];
  constructor(private carusalService: CarusalService) {
    this.listShown = this.carusalService.listShown;
  }

  prevois() {
    this.carusalService.previous();
    this.listShown = this.carusalService.listShown;
  }

  next() {
    this.carusalService.next();
    this.listShown = this.carusalService.listShown;
  }
  ngOnInit(): void {
    this.listShown = this.carusalService.listShown;
  }
}
