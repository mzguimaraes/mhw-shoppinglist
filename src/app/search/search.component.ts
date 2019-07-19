import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { GearService } from '../gear.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // TODO: 
    // search by:
      // name
      // skill
      // multiple filters

  // gearIds$: number[]; // should be Observable
  gearIds$: Observable<number[]>;
  
  private nameSearchTerm = new Subject<string>();

  constructor(
    private gearService: GearService,
  ) { }

  searchByName(term: string) {
    this.nameSearchTerm.next(term);
  }

  ngOnInit() {
    this.gearIds$ = this.nameSearchTerm.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      //TODO: get observable from search service
      switchMap((term: string) => {
        if (term)
          return this.gearService.searchByName(term)
        else return of([]);
      }),
    );
  }

}
