import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CsvRecord,
  CsvRow,
} from 'src/app/shared/components/csv-upload/services/models/csv-record';
import { SearchCep } from 'src/app/shared/services/search-cep/models/search-cep';
import { SearchCepService } from 'src/app/shared/services/search-cep/search-cep.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultService {
  constructor(private searchCep: SearchCepService) {}

  public checkCepData(csvRecord: CsvRecord): Observable<unknown> {
    const observables = new Array();

    for (let row of csvRecord.rows) {
      observables.push(
        this.searchCep
          .fetch(row.cep)
          .pipe(
            map((searchCepRes) => this.updateCepValidation(searchCepRes, row))
          )
      );
    }

    return forkJoin(observables);
  }

  private updateCepValidation = (searchCepRes: SearchCep, row: CsvRow) =>
    searchCepRes?.code?.replace('-', '') === row?.cep
      ? {
          ...row,
          isValid: true,
        }
      : {
          ...row,
          isValid: false,
        };
}
