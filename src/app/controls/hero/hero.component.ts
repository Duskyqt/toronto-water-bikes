import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'twb-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    @Input() title: string = '';
    @Input() backgroundImage: string = '';
    @Input() backgroundSize: string = 'cover';
    @Input() heroTextColor: string = '';
    constructor() { }

    ngOnInit(): void {        
    }
    OnClick(): void {

    }
}
