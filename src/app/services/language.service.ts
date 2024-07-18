import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language!: "es" | "en";

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) { }

  initLanguage(){
    this.translateService.addLangs(["en", "es"]);
    
    let language: string = 'en';  // Default to English

    // Check if navigator is defined and get the browser language
    if (typeof navigator !== 'undefined' && navigator.language) {
      language = navigator.language.split('-')[0];  // Use the part before the dash, e.g., 'en-US' becomes 'en'
    }

    // Set the default language for the translation service
    this.translateService.setDefaultLang(language);

    // Change the URL without navigating
    this.location.go(language);

    // Set the language property
    this.language = language as "es" | "en";
  }

  changeLanguage(language: "es" | "en") {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
