import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroesHttpService } from '../heroes-http/heroes-http.service';
import Hero from '../../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes$ = new BehaviorSubject<Hero[]>([]);

  constructor(private http: HeroesHttpService) { }

  get Heroes() {
    return this._heroes$;
  }

  getHeroes(): void {
    this.http.getHeroes().subscribe((heroes: Hero[]) => {
      this._heroes$.next(heroes);
    });
  }

  getHero(id: string): Promise<Hero> {
    return this.http.getHero(id).toPromise();
  }

  sortHeroes(key: ('name' | 'rating') = 'name'): void {
    this.http.sortHeroes(key).subscribe((heroes: Hero[]) => {
      this._heroes$.next(heroes);
    });
  }

  rateHero(hero: Hero, rating: number) {
    this.http.rateHero(hero, rating).subscribe((updatedHero: Hero) => {
      const heroIdx = this._heroes$.value.findIndex(item => item.id === hero.id);
      const heroes = this._heroes$.value;
      heroes[heroIdx] = updatedHero;
      this._heroes$.next(heroes);
    });
  }


  searchHeroes(keyword: string) {
    this.http.searchHeroes(keyword).subscribe((heroes: Hero[]) => {
      this._heroes$.next(heroes);
    });
  }


}
