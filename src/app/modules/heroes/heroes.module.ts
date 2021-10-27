import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { MaterialModule } from 'src/app/material.module';
import { RatingComponent } from './components/rating/rating.component';
import { SharedModule } from '../shared/shared.module';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { HeroesFilterComponent } from './components/heroes-filter/heroes-filter.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroesFilterComponent,
    HeroesListComponent,
    HeroCardComponent,
    RatingComponent,
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HeroesModule { }
