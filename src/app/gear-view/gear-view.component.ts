import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-view',
  templateUrl: './gear-view.component.html',
  styleUrls: ['./gear-view.component.css']
})
export class GearViewComponent implements OnInit {

  gearIds: number[] = [1, 5, 106, 538];

  constructor() { }

  ngOnInit() {
  }

}
