import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flashcards';

  constructor(private translate: TranslateService){
    translate.addLangs(['en','hu']);
    translate.setDefaultLang(window.localStorage.getItem('flashcards.language') || 'en');
  }

  private langChange = this.translate.onLangChange.subscribe((e) => {
    //console.log(`language changed to ${this.translate.currentLang}`);

    window.localStorage.setItem("flashcards.language", this.translate.currentLang);
  })
}
