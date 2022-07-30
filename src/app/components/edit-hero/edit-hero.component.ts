import { SuperHeroService } from './../../services/super-hero.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SuperHero;

  @Output() heroUpdated = new EventEmitter<SuperHero[]>();
  @Output() Exit = new EventEmitter<boolean>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void { }

  UpdateHero(hero: SuperHero) {
    this.superHeroService.UpdateSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
    this.hero = new SuperHero();
  }

  DeleteHero(hero: SuperHero) {
    this.superHeroService.DeleteSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
    this.hero = new SuperHero();
  }

  CreateHero(hero: SuperHero) {
    this.superHeroService.CreateSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
    this.hero = new SuperHero();
  }
  clear(){
    this.Exit.emit(true);
  }

}
