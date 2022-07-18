import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarusalService {
  public listShown: string[];
  public carusalList: string[] = [];
  public x: number = 0;
  constructor() {
    this.carusalList = [
      'Number 1',
      'Number 2',
      'Number 3',
      'Number 4',
      'Number 5',
      'Number 6',
      'Number 7',
      'Number 8',
      'Number 9',
      'Number 10',
      'Number 11',
      'Number 12',
      'Number 13',
      'Number 14',
      'Number 15',
    ];
    this.listShown = [
      this.carusalList[this.x],
      this.carusalList[this.x + 1],
      this.carusalList[this.x + 2],
      this.carusalList[this.x + 3],
    ];
  }

  next() {
    this.x++;
    this.listShown = [
      this.carusalList[this.x],
      this.carusalList[this.x + 1],
      this.carusalList[this.x + 2],
      this.carusalList[this.x + 3],
    ];
    console.log(this.x);
  }
  previous() {
    this.x--;
    this.listShown = [
      this.carusalList[this.x],
      this.carusalList[this.x + 1],
      this.carusalList[this.x + 2],
      this.carusalList[this.x + 3],
    ];
    console.log(this.x);
  }
}
