import { Component, Input, OnInit } from '@angular/core';
import { faMask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any;
  faMask = faMask;

  constructor() { }

  ngOnInit(): void {
  }

}
