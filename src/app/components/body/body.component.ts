import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar = true;
  policy: any = {
    message:"Privacy Policy for JEAS At FGW01, accessible from https://fgw01.herokuapp.com, one of our main priorities is the privacy of our visitors. Consent By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
    title:"Privacy policy"
  };
  constructor() { }

  ngOnInit() {

  }

}
