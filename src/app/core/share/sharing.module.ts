import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipe/pipe.module';
import { ModalTrailerComponent } from '../component/modal-trailer/modal-trailer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ThemSuaNguoiDungComponent } from './components/update-user/them-sua-nguoi-dung/them-sua-nguoi-dung.component';
import { ThemSuaPhimComponent } from './components/them-sua-phim/them-sua-phim.component';
import { ThemSuaLichChieuComponent } from './components/them-sua-lich-chieu/them-sua-lich-chieu.component';
import { YoutubeComponent } from './components/you-tube/you-tube.component';
import { WarningComponent } from './components/warning/warning.component';
import { ConfirmComponent } from './components/confirm/confirm.component'
@NgModule({
  declarations: [ModalTrailerComponent, ThemSuaNguoiDungComponent, ThemSuaPhimComponent, ThemSuaLichChieuComponent, YoutubeComponent, WarningComponent, ConfirmComponent],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalTrailerComponent, ThemSuaNguoiDungComponent, ThemSuaPhimComponent, ThemSuaLichChieuComponent, YoutubeComponent, WarningComponent, ConfirmComponent
  ]
})
export class SharingModule { }
