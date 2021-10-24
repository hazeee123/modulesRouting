import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverAboutComponent } from './discover-about/discover-about.component';
import { DiscoverCardsComponent } from './discover-cards/discover-cards.component';
import { DiscoverListComponent } from './discover-list/discover-list.component';

const routes: Routes = [
  {
  path: 'discover', 
  component: DiscoverListComponent,
  children: [
    { path: 'about', component: DiscoverAboutComponent},
    { path: 'cards', component: DiscoverCardsComponent},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
