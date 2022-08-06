// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-star-rating-builder',
//   templateUrl: './star-rating-builder.component.html',
//   styleUrls: ['./star-rating-builder.component.css']
// })
// export class StarRatingBuilderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-rating-builder',
  templateUrl: './star-rating-builder.component.html',
  styleUrls: ['./star-rating-builder.component.css'],
})
export class StarRatingBuilderComponent implements OnInit {
  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'accent';
  @Output() ratingUpdated = new EventEmitter<number>();

  snackBarDuration: number = 2000;
  ratingArr: any[] = [];
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    console.log('a ' + this.starCount);
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    console.log(rating);
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration,
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
export enum StarRatingColor {
  primary = 'primary',
  accent = 'secondary',
  warn = 'warning',
}
