import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  value: "value";
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /**
     * '+' turns the string of the parameter into an id. Snapshot returns 
     * snapshot of url. paramMap function returns a map of all parameterized 
     * variables in the url of the route.
     */
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
