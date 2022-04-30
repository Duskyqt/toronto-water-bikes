import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'twb-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
    @Input() text: string = '';
    @Input() href: string = '';
    @Input() routerLink: string = '';
    @Input() target: string = "_blank";
    constructor() { }

    ngOnInit(): void {
    }

}
