import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameId: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.gameId = params['id'];
    })
  }

  ngOnInit(): void {
  }

}
