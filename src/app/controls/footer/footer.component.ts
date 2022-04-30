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
    OnClick(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}
