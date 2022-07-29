import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsImg:any[]=[]
  constructor() {
    this.newsImg =[{
      imgUrl:"../../../assets/images/1.jpg"
    },
    {
      imgUrl:"../../../assets/images/2.jpg"
    },
    {
      imgUrl:"../../../assets/images/3.jpg"
    },
    {
      imgUrl:"../../../assets/images/4.jpg"
    },
    {
      imgUrl:"../../../assets/images/5.jpg"
    },
    {
      imgUrl:"../../../assets/images/6.jpg"
    },
     ]
   }

  ngOnInit(): void {
  }

}
