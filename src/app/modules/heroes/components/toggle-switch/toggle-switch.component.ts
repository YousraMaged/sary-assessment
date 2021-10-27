import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  selectedIndex = 0;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  toggle(idx: number, key: ('name' | 'rating')) {
    this.selectedIndex = idx;
    this.heroesService.sortHeroes(key);
  }

}
