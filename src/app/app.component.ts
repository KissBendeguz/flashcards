import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SettingsService]
})
export class AppComponent {
  title = 'flashcards';

  constructor(private translate: TranslateService, private settings: SettingsService) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');


    let serializedSettings = window.localStorage.getItem('flashcards');
    if (serializedSettings != null) {
      settings.loadSettings(JSON.parse(serializedSettings));
    }
    translate.use(settings.getLanguage());

    //settings.addCards("teszt", "2022.09.02", [["asd", "123"]]);
  }

  private langChange = this.translate.onLangChange.subscribe((e) => {
    //console.log(`language changed to ${this.translate.currentLang}`);
    this.settings.setLanguage(this.translate.currentLang);
  })
}
