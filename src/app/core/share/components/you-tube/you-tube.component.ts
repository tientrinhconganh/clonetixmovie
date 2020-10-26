import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.scss'],
})
export class YoutubeComponent implements OnInit,OnChanges {
  @Input() trailer: string;
  currentHeight:number
  isClose:boolean
  constructor() {}
  @HostListener ('window:resize')
  onResize(){
    this.currentHeight = window.innerHeight
  }

  ngOnInit(): void {
    this.currentHeight = window.innerHeight;
  }
  ngOnChanges(){
  }
}
