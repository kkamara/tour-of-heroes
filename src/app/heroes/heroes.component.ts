import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  selectedHero?: Hero

  onSelect(hero: Hero): void {
    if (
      undefined !== this.selectedHero &&
      (this.selectedHero as Hero).id === hero.id
    ) {
      this.selectedHero = undefined
      return
    }
    this.messageService.add(
      `HeroesComponent: Selected hero id=${hero.id}`
    )
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

}
