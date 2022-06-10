import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { SearchCep } from './models/search-cep';

@Injectable({
  providedIn: 'root',
})
export class SearchCepService {
  constructor(private http: HttpClient) {}

  public fetch(cep: string): Observable<SearchCep> {
    const uri = `https://ws.apicep.com/cep/${cep}.json`;
    return this.http.get<SearchCep>(uri).pipe(distinctUntilChanged());
  }
}
