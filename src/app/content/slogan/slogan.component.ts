import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slogan',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.scss'],
})
export class SloganComponent implements OnInit {
    start: boolean = false;
    constructor() {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }
    startOrResumeTimer() {
        setInterval(() => {
            this.start = true;
        }, 1000);
    }
}
