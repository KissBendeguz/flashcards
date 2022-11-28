import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  ngOnInit(): void {
    let obj = this.settings.getCards();
    if(obj!==false){{
      console.log(obj[Object.keys(obj)[0]]);
    }}
    
  }

  noCards:boolean = true;
}
