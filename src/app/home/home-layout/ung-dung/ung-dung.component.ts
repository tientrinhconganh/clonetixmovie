import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ung-dung',
  templateUrl: './ung-dung.component.html',
  styleUrls: ['./ung-dung.component.scss']
})
export class UngDungComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true , "autoplaySpeed": 2500};
  constructor() { }

  ngOnInit(): void {
  }

}
