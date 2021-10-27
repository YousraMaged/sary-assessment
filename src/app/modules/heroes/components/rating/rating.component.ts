import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeroesService } from '../../services/heroes/heroes.service';
import Hero from '../../models/Hero';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {

  @Input() hero: Hero;
  @Input() readonly = false;
  displayedRating: number;
  stars = Array(5).fill('');

  constructor(private heroesService: HeroesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hero) {
      this.displayRating();
    }
  }

  displayRating(value = this.hero.rating) {
    this.displayedRating = value;
  }

  rate(value: number) {
    this.heroesService.rateHero(this.hero, value)
  }

}
