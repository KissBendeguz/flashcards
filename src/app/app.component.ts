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
    translate.setDefaultLang('en');
  }

  public useLanguage(language: string){
    this.translate.use(language);
  }
}
