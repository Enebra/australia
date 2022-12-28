import { Component, OnInit } from '@angular/core';
import { ContentCategory } from '../../models/contentCategory';
import { ContentCard } from '../../models/contentCard';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
    start: boolean = false;
    sectionTitle: string = 'Select category';
    categories: ContentCategory []= [
        { url: '#', name: 'Blockchain' },
        { url: '#', name: 'Smart Contract' },
        { url: '#', name: 'Web3' },
        { url: '#', name: 'Artificial Intelligence' },
        { url: '#', name: 'Machine Learning' },
        { url: '#', name: 'Web' },
        { url: '#', name: 'Gambling' },
        { url: '#', name: 'Computer Vision' },
        { url: '#', name: 'FinTech' },
        { url: '#', name: 'Big Data' },
        { url: '#', name: 'Biometric' },
        { url: '#', name: 'Cybersecurity' },
        { url: '#', name: 'Penetration Test' },
        { url: '#', name: 'Design' },
        { url: '#', name: 'Audio & Video' },
        { url: '#', name: 'ArcGIS' },
        { url: '#', name: 'Microcontroller' },
    ];
    cards: ContentCard [] = [
        {
            logo: 'B2G',
            img: './assets/img/cards/government.png',
            title: 'Business To Government',
            text: 'Learn about vulnerabilities before others vulnerabilities before others Learn about about vulnerabilities before others vulnerabilities before others Learn about vulnerabilities before others',
            url: '#',
            action: 'More',
        },
        {
            logo: 'B2B',
            img: './assets/img/cards/BusinessToBusiness.png',
            title: 'Business To Business',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corrupti  a voluptatibus autem eaque aut nisi quis ex sequi! Ducimus necessitatibus deleniti mollitia ex dignissimos odio obcaecati totam est nesciunt?',
            url: '#',
            action: 'More',
        },
        {
            logo: 'B2C',
            img: './assets/img/cards/BusinessToCustomer.png',
            title: 'Business To Customer',
            text:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corrupti a voluptatibus autem eaque aut nisi quis ex sequi! Ducimus necessitatibus deleniti mollitia ex dignissimos odio obcaecati totam est nesciunt?',
            url: '#',
            action: 'More',
        },
    ];
    constructor() {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }
    startOrResumeTimer() {
        setInterval(() => {
            this.start = true;
        }, 1300);
    }
}
