import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverListComponent } from './discover-list/discover-list.component';
import { DiscoverAboutComponent } from './discover-about/discover-about.component';
import { DiscoverCardsComponent } from './discover-cards/discover-cards.component';


@NgModule({
  declarations: [
    DiscoverListComponent,
    DiscoverAboutComponent,
    DiscoverCardsComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  exports: [DiscoverListComponent], 
})
export class DiscoverModule { }
