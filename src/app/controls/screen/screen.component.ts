import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'twb-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
    @Input() src: string = '';
    @Input() content: string = '';
    @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
