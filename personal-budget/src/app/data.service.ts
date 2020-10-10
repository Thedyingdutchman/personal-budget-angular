import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as d3 from 'd3';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  dataUrl: string = 'https://localhost:3000/budget';

  constructor(private http: HttpClient) { }

  // Adjust this to create your pie chart
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
