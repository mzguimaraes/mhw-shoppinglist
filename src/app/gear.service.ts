import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
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

  searchByName(term: string): Observable<number[]> {
    // const url = `${this.endpoint}/?p={"id":true}&q={"name": {"$like": "%${term}%"}}`;
    let params: HttpParams = new HttpParams()
      .set('p', JSON.stringify({"id": true}))
      .set('q', JSON.stringify({"name": {"$like": `\%${term}\%`}}));
    console.log(params.toString());
    return this.http.get<number[]>(this.endpoint, {
      params: params
    }).pipe(
      tap(_ => console.log(`querying url ${this.endpoint} for term ${term}`)),
      // transform data from array of objects to array of ID numbers
      // tap(result => result.map(obj => obj["id"])),
      // map(val => val["id"]),
      map(results => results.map(val => val["id"])),
      tap(result => console.log(`result: ${result}`)),
      catchError(this.handleError<number[]>(`searchByName query=${term}`))
    );
  }

}
