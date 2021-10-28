import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { environment } from 'src/environments/environment';
import Hero from '../../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesHttpService {

  constructor(private api: ApiService) { }

  getHeroes(): Observable<Hero[]> {
    return this.api.get<Hero[]>(`${environment.baseUrl}/heroes`);
  }

  getHero(id: string): Observable<Hero> {
    return this.api.get<Hero>(`${environment.baseUrl}/heroes/${id}`);
  }

  sortHeroes(key: ('name' | 'rating') = 'name'): Observable<Hero[]> {
    return this.getHeroes().pipe(
      tap(heroes => heroes.sort((a, b) => a[key] > b[key] ? 1 : -1)),
      tap(heroes => key === 'rating' ? heroes.reverse() : heroes)
    )
  }

  rateHero(hero: Hero, rating: number) {
    return this.api.put<Hero>(`${environment.baseUrl}/heroes/${hero.id}`, {
      ...hero,
      rating
    });
  }

  searchHeroes(keyword: string) {
    return this.getHeroes().pipe(
      map(heroes => heroes.filter(hero => hero.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1))
    );
  }

}
