import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-create-cards',
  templateUrl: './create-cards.component.html',
  styleUrls: ['./create-cards.component.scss']
})
export class CreateCardsComponent implements OnInit {

  constructor(public settings:SettingsService) {

  }

  ngOnInit(): void {
    console.log(this.settings.getCurrentStorage());
    let obj = this.settings.getCards();
    if(obj!==false){{
      console.log(obj[Object.keys(obj)[0]]);
    }}
    
  }

  add(){
    let today = new Date();
    this.settings.addCards('teszt', today.toLocaleDateString(),
    [
      ['q1?','a1.'],
      ['q2?','a2.'],
      ['q3?','a3.'],
      ['q4?','a4.']
    ]);
    
  }
}
