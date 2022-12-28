import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Navigation,
  Scrollbar,
  A11y, Pagination, Keyboard, Mousewheel, EffectCube,
} from 'swiper';

SwiperCore.use([EffectCube, Autoplay, Navigation, Scrollbar, A11y, Pagination, Keyboard, Mousewheel]);
@Component({
    selector: 'app-top-slider',
    templateUrl: './top-slider.component.html',
    styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

}
