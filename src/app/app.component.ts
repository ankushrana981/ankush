import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ankush-portfolio';
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ){}
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Ankush Rana | MEAN Stack Developer | MERN Stack Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer' },
      { name: 'description', content: 'As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.' },
    ]);
    
    AOS.init();


  }
}
