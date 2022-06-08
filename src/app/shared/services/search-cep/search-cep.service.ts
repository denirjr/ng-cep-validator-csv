import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCep } from './models/search-cep';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchCepService {
  constructor(private http: HttpClient) {}

  public isValidCep(cep: string): Observable<boolean> {
    const uri = `https://ws.apicep.com/cep.json?code=${cep}`;
    return this.http.get<SearchCep>(uri).pipe(map((res) => res?.ok === true));
  }
}
