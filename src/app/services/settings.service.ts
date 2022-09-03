import { Injectable } from '@angular/core';
import { CardStorage } from '../interfaces/cardstorage';
import { v4 as uuid } from 'uuid';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SettingsService {

  private currentStorage: CardStorage;

  constructor(private translate: TranslateService) {
    this.currentStorage = { language: '', cards: {} };
  }

  public loadSettings(settings:CardStorage){
    this.currentStorage = settings;
  }
  public setLanguage(lang:string){
    this.currentStorage.language = lang;
    this.saveCurrentStorage();
  }
  public getLanguage(){
    return this.currentStorage.language;
  }

  public addCards(title: string, created: string, questions: Array<Array<string>>, asked?: number, success?: number) {
    if (asked == null) {
      asked = 0;
      success = 0;
    }
    if (success == null) {
      success = 0;
    }
    this.currentStorage.cards[uuid()] = {
      //id: uuid(),
      title, created, questions, asked, success
    }

    this.saveCurrentStorage();
  }

  private localStorageSupport(){
    try {
        localStorage.setItem("teszt", "teszt");
        localStorage.removeItem("teszt");
        return true;
    } catch(e) {
        return false;
    }
  }
  public saveCurrentStorage() {
    if (this.localStorageSupport()) {
      window.localStorage.setItem("flashcards",JSON.stringify(this.currentStorage));
      console.log(this.currentStorage);
    }else{
      
    }
  }
  

  /*public modifyCards(id: string, title: string, created: string, questions: Array<Array<string>>) {
    this.currentStorage.cards[]
  }*/

  /*teszt: Storage = {
    language: 'hu',
    cards["string"]:
    {
      //id:"a532-asd1",
      title: "teszt",
      asked: 301,
      success: 243,
      created: "2022.09.01",
      questions: [
        [
          "dumb?",
          "yes"
        ],
        [
          "deez",
          "nuts"
        ]
      ]
    }
  }*/

}
