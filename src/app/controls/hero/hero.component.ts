import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'twb-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    @Input() title: string = '';
    constructor() { }

    ngOnInit(): void {
    }

}
