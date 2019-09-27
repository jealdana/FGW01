import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  techonologiesArr: any[]=
  [
  {
    title:"NodeJS",
    text:"Most common tool in 2019 for web development.",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"
  },
  {
    title:"Heroku",
    text:"Platform dedicate to store prototypes and small projects.",
    imageUrl:"https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png"
  },
  {
    title:"AngularJS",
    text:"Used for the frontend of the web app.",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/220px-AngularJS_logo.svg.png"
  },
  {
    title:"Bootstrap",
    text:"It is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/220px-Boostrap_logo.svg.png"
  },
  {
    title:"Github",
    text:"GitHub is an American company that provides hosting for software development version control using Git.",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GitHub_logo_2013_padded.svg/128px-GitHub_logo_2013_padded.svg.png"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
