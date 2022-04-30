import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTiktok, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'twb-social-links',
    templateUrl: './social-link.component.html',
    styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit {
    @Input() icon: string = '';
    @Input() href: string = '';
    @Input() target: string = '_blank';
    @Input() linkHeight: string = "5em";

    socials: {Icon: IconDefinition, Url?: string }[] = [
        { Icon: faFacebook, Url: "https://www.facebook.com/Toronto-Water-Bikes-100578615705964"},
        { Icon: faInstagram, Url: "https://www.instagram.com/torontowaterbikes" },
        { Icon: faTicket, Url: "https://book.peek.com/s/dcce5dec-d710-4462-9848-c68b5b8b73f7/WRqbD" }
        
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
