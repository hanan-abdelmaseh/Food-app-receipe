import { Component, Input, OnInit } from '@angular/core';
import { CarsolService } from 'src/app/Services/carsol.service';
import { CarsolImg } from '../../Interface/carsol-img';

@Component({
  selector: 'app-carsol',
  templateUrl: './carsol.component.html',
  styleUrls: ['./carsol.component.css'],
})
export class CarsolComponent implements OnInit {
  @Input() carsolItems: CarsolImg[] = [];
  selectedIndex: number = 0;
  public x: number;

  ////controls

  @Input() listItems: CarsolImg[] = [];
  constructor(private CarsolService: CarsolService) {
    this.listItems = this.CarsolService.listShown;
    this.x = this.CarsolService.x;
  }

  ngOnInit(): void {
    this.listItems = this.CarsolService.listShown;
  }
  prevois() {
    this.CarsolService.previous();
    this.listItems = this.CarsolService.listShown;
    this.x = this.CarsolService.x;
    this.x = this.CarsolService.x;
  }

  next() {
    this.CarsolService.next();
    this.listItems = this.CarsolService.listShown;
    this.x = this.CarsolService.x;
  }
  onPrev() {
    console.log(this.selectedIndex);
    console.log(this.carsolItems.length - 1);

    if (this.selectedIndex === 0) {
      this.selectedIndex === this.carsolItems.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNext() {
    console.log(this.selectedIndex);
    console.log(this.carsolItems.length - 1);
    if (this.selectedIndex === this.carsolItems.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
