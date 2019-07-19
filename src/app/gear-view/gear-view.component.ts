import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gear-view',
  templateUrl: './gear-view.component.html',
  styleUrls: ['./gear-view.component.css']
})
export class GearViewComponent implements OnChanges {

  @Input() gearIds$: Observable<number[]>;

  constructor() { }

  ngOnChanges() {
  }

}
