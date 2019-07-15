import { Component, OnInit, Input } from '@angular/core';
import { GearService } from '../gear.service';
import { Gear } from '../gear';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.css']
})
export class GearComponent implements OnInit {
  STATES = {
    INIT: 'initialized',
    UNINIT: 'uninitialized',
  }
  state = this.STATES.UNINIT;

  gear: Gear;

  @Input() id: number;

  constructor(
    private gearService: GearService,
  ) { }

  ngOnInit() {
    if (!this.id) {
      this.id = -1;
      this.state = this.STATES.UNINIT;
    }
    else {
      this.state = this.STATES.INIT;  
    }

    // retrieve item info from server
    if (this.state == this.STATES.INIT) {
      this.gearService.getGear(this.id)
        .subscribe( gear => {
          console.log("obtained gear with id", gear.id);
          this.gear = gear;
        });
    }
  }

}
