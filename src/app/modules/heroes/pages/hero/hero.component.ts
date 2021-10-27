import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMask } from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  faMask = faMask;
  hero: any;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.hero = this.heroesService.getHero(id)
      .then(hero => this.hero = hero)
      .catch(err => console.log(err));
    }
  }

}
