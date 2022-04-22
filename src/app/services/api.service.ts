import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root',
})
export class apiService {
  private readonly API_URL = environment.charapter.url;

  constructor(private http: HttpClient) {}

  public getCharacter(house: any): Observable<Character[]> {
    const x = this.http
      .get<Character[]>(`${this.API_URL}house/` + house)
      .pipe(retry(1));
    return x;
  }

  public getStaff(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.API_URL}staff`);
  }

  public getStudents(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.API_URL}students`);
  }
}
