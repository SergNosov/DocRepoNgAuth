import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './component/topBar.component';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../../../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {
}
