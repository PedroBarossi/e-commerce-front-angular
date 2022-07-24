import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loja-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgPath = "/assets/hand.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
