import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public readonly gameInstance: Game;
  public readonly gameId: any;

  constructor(private route: ActivatedRoute) {
    //temporary variables for readonly functionality
    let id;
    let qMap = new Map<string,string>();


    this.route.params.subscribe(params=>{
      id = params['id'];
    })

    this.gameId = id;
    this.gameInstance = new Game(this.gameId,qMap);


    console.log(`valid: ${this.gameInstance.isValidInstance().toString()}`);


  }

  ngOnInit(): void {
  }

}
