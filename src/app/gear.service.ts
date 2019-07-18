import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Gear } from './gear';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  private endpoint = 'https://mhw-db.com/armor';

  getGear(id: number): Observable<Gear> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Gear>(url).pipe(
      tap(_ => console.log(`fetched gear id = ${id}`)),
      catchError(this.handleError<Gear>(`getGear id=${id}`))
    );
  }

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

}
