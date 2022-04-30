import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'twb-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    @Input() questionTitle: string = '';
    @Input() questionText: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
