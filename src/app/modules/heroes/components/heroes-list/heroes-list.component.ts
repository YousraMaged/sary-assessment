import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes/heroes.service';
import Hero from '../../models/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  get Heroes(): Observable<Hero[]> {
    return this.heroesService.Heroes;
  }

  getHeroes() {
    this.heroesService.sortHeroes();
  }

}
