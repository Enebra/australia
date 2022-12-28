import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    start: boolean = false;
    burgerMenu = false;
    localTheme: string | null = window.localStorage.getItem('userTheme');
    systemTheme: string | null = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    boolTheme = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
      if (this.localTheme) {
        this.boolTheme = this.localTheme === 'dark';
        document.documentElement.classList.add(this.localTheme)

      } else if (this.systemTheme){
        window.localStorage.setItem('userTheme', this.systemTheme)
        this.boolTheme = this.systemTheme === 'dark';
        document.documentElement.classList.add(this.systemTheme)
      } else {
        this.boolTheme = true;
      }
    }

    startOrResumeTimer() {
        setInterval(() => {
            this.start = true;
        }, 100);
    }
    burgerMenuToggle() {
        this.burgerMenu = !this.burgerMenu;
        this.document.body.classList.toggle('lock');
    }
    themeToggle() {

      let currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      console.log(currentTheme);
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      // console.log(newTheme);
      document.documentElement.classList.remove(currentTheme)
      document.documentElement.classList.add(newTheme)
      window.localStorage.setItem('userTheme', newTheme)
      this.boolTheme = !this.boolTheme;
    }
}
