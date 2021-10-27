import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('expandCollapseState', style({ height: '*', opacity: 1 })),
      transition('* => void', [style({ height: '*', opacity: 1 }), animate(250, style({ height: "0", opacity: 0 }))]),
      transition('void => *', [style({ height: '0', opacity: 0 }), animate(250, style({ height: "*", opacity: 1 }))])
    ])]
})
export class HeroesFilterComponent implements OnInit {

  faSearch = faSearch;
  faTimes = faTimes;
  showFilters = true;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    const keyword = event.target.value;
    this.heroesService.searchHeroes(keyword);
  }

}

