import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly API_URL = environment.charapter.url;

  constructor(private http: HttpClient) {}

  public getCharacter(house: any): Observable<any[]> {
    const x = this.http
      .get<Character[]>(`${this.API_URL}` + house)
      .pipe(retry(1));
    return x;
  }
}
