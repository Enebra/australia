import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    title = 'Pro Soft Hub';
    loader = true;

    displayTopBtn: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}
    ngAfterViewInit() {
        setTimeout(() => {
            this.loader = false;
            setTimeout(() => {
                this.ibg().then(() => {
                    this.animOnScroll().then(() => {
                        console.log('start');
                    });
                });
            }, 500);
        }, 100);
    }

    async ibg() {
        const images = document.querySelectorAll('.ibg');
        if (images.length > 0) {
            await Promise.all(
                Object.keys(images).map(async (img, i) => {
                    if (images[i].querySelector('img')) {
                        // @ts-ignore
                        images[i].style.backgroundImage = `url(${images[i]
                            .querySelector('img')
                            .getAttribute('src')})`;
                        // @ts-ignore
                        // console.log(images[i].style.backgroundImage);
                    }
                }),
            );
        }
    }
    async animOnScroll() {
        const animItems = document.querySelectorAll('._anim-items');

        if (animItems.length > 0) {
            window.addEventListener('scroll', this.animOnScroll, false);
            await Promise.all(
                Object.keys(animItems).map(async (i) => {
                    // @ts-ignore
                    const animItem = animItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }

                    if (
                        scrollY > animItemOffset - animItemPoint &&
                        scrollY < animItemOffset + animItemHeight
                    ) {
                        animItem.classList.add('_active');
                    } else if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }),
            );
        }
        function offset(el: { getBoundingClientRect: () => any }) {
            const rect = el.getBoundingClientRect();
            let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
    }
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(): void {
        let scrolled = window.scrollY;
        let coords = window.innerHeight / 2;
        this.displayTopBtn = scrolled > coords;
    }
    backToTop() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.scrollY;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 5);
    }
}
