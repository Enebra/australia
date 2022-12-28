import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TopSliderComponent } from './content/top-slider/top-slider.component';
import { SwiperModule } from 'swiper/angular';
import { SloganComponent } from './content/slogan/slogan.component';
import { CategoryComponent } from './content/category/category.component';
import { SolutionComponent } from './content/solution/solution.component';
import { ProcessComponent } from './content/process/process.component';
import { TechComponent } from './content/tech/tech.component';
import { ExtraSolutionComponent } from './content/extra-solution/extra-solution.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { DownFooterComponent } from './footer/down-footer/down-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSliderComponent,
    SloganComponent,
    CategoryComponent,
    SolutionComponent,
    ProcessComponent,
    TechComponent,
    ExtraSolutionComponent,
    FooterMenuComponent,
    DownFooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
