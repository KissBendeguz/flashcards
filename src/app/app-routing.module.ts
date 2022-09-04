import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CreateCardsComponent } from './components/create-cards/create-cards.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cards',children:[
    {path: '', component: CardsComponent},
    {path: ':id', component: GameComponent},
    {path: 'create', component: CreateCardsComponent}
  ]},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
