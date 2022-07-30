import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';
@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  //private url = 'SuperHero';
  private geturl = "SuperHero/GetSuperHero";
  private createurl = "SuperHero/CreateSuperHero";
  private updateurl = "SuperHero/FixSuperHero";
  private deleteurl = "SuperHero/RemoveSuperHero";
  constructor(private http: HttpClient) { }
  //for create variable
  // public getSuperhero() :SuperHero[]
  // {
  //   let hero = new SuperHero();
  //   hero.id = 1;
  //   hero.name = "Spider-man";
  //   hero.firstname = "Peter";
  //   hero.lastname = "Parker";
  //   hero.place = "New York City";
  //   return [hero];
  // }
  public getSuperHero(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.geturl}`);
  }
  public CreateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.createurl}`, hero);

  }
  public UpdateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.updateurl}`, hero);
  }
  public DeleteSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.deleteurl}/${hero.id}`);
  }
}

