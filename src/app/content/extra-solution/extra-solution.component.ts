import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectFade,  SwiperOptions } from 'swiper';
SwiperCore.use([EffectFade]);

@Component({
    selector: 'app-extra-solution',
    templateUrl: './extra-solution.component.html',
    styleUrls: ['./extra-solution.component.scss'],
})
export class ExtraSolutionComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
    }
    config: SwiperOptions = {
        effect: 'fade',
        loop: true,
        grabCursor: true,
        slideToClickedSlide: true,
        autoHeight: false,
        mousewheel: { sensitivity: 1 },
        keyboard: { onlyInViewport: true, pageUpDown: true },
        autoplay: { delay: 3000, disableOnInteraction: true },
        speed: 800,
        pagination: {
            clickable: true,
            dynamicBullets: true,
            type: 'bullets',
        },
        navigation: true,
    };
}
