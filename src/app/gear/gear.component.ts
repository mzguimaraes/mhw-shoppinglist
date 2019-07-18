import { Component, OnInit, Input } from '@angular/core';
import { GearService } from '../gear.service';
import { Gear, GearFields } from '../gear';

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
  featuredSkill: GearFields.Skill;

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
          this.featuredSkill = this.gear.skills[0];
        });
    }
  }

  setFeaturedSkill(skillName: string) {
    let matchedSkill = this.gear.skills.find((el) => el.skillName === skillName);    
  }

}
