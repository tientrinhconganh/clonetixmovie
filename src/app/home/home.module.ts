import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

import { HomeLayoutModule } from './home-layout/home-layout.module';
import { DetailMovieModule } from './detail-movie/detail-movie.module';

import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from '../core/material/material.module'
import { NgxSpinnerModule } from "ngx-spinner";
import {BuyTicketComponent} from './buy-ticket/buy-ticket.component'
import {MuaVeGuard} from '../core/guards/mua-ve.guard'
import {BuyTicketModule} from './buy-ticket/buy-ticket.module'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', component: HomeLayoutComponent, data: { title: 'Home' }
      },
      {
        path: 'detail/:maPhim', component: DetailMovieComponent, data: {title: 'Movie-detail'}
      },
      { path: 'datve/:maLichChieu', component: BuyTicketComponent,canDeactivate: [MuaVeGuard]  },

    ]
  }
]

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    DetailMovieModule ,
    HomeLayoutModule,
    MaterialModule,
    NgxSpinnerModule,
    BuyTicketModule
  ]
})
export class HomeModule { }
