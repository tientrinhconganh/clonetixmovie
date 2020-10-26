import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component'
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InfoMovieComponent } from './info-movie/info-movie.component';
import { MovieShowtimesInformationComponent } from './movie-showtimes-information/movie-showtimes-information.component';
import { FilmReviewComponent } from './film-review/film-review.component';
import { DanhGIaComponent } from './danh-gia/danh-gia.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {SharingModule} from '../../core/share/sharing.module' 
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [ DetailMovieComponent, InfoMovieComponent, MovieShowtimesInformationComponent, FilmReviewComponent, DanhGIaComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    FormsModule,
    ReactiveFormsModule,
    SharingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class DetailMovieModule { }
