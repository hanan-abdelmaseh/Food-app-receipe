import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
 @Input() Title:string ="";
 @Input() Text:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
