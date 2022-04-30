import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(): void{
      document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }
}
