import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScreenComponent } from './screen/screen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialLinkComponent } from './social-link/social-link.component';
import {MatIconModule} from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [      
    HeaderComponent,
    FooterComponent,
    ScreenComponent,
    SocialLinkComponent,
    LinkComponent,
    HeroComponent
],
  imports: [    
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScreenComponent,
    SocialLinkComponent
  ]
})
export class ControlsModule { }
