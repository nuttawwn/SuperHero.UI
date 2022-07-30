import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  public clearhero : boolean = true;
  columnsToDisplay = ['name','firstName','lastName','place','button'];

  constructor(private superHeroService: SuperHeroService) { }
  ngOnInit(): void {
    //for create variable
    // this.heroes = this.superHeroService.getSuperhero();
    // console.log("this.heroes>>>>",this.heroes)
    this.superHeroService
      .getSuperHero()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
  initNewHero() {
    this.heroToEdit = new SuperHero();
    this.clearhero = true;
  }
  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
    this.clearhero = true;
  }
  updateHerolist(heroes: SuperHero[]){
    this.heroes = heroes;
  }
  ExitFromHero(){
    this.clearhero = false;
  }
}
