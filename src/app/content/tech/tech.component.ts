import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements OnInit {
    config: SwiperOptions = {
        spaceBetween: 30,
        loop: true,
        pagination: {
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
            },
        },
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        autoHeight: true,
        navigation: false,
        breakpoints: {
            320: {
                pagination: {
                    clickable: true,
                    renderBullet: function (index, className) {
                        const menu = [
                            'Web',
                            'Mobile',
                            'Database',
                            'Microcontrollers',
                            'Blockchain',
                            'CMS',
                            'DevOps',
                        ];
                        return `<span class='${className}'>${menu[index]}</span>`;
                    },
                },
                navigation: true,
            },
        },
    };

    constructor() {}

    ngOnInit(): void {}
}
