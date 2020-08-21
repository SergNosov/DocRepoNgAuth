import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './components/feed/feed.component';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {StoreModule} from '@ngrx/store';
import {redusers} from './store/redusers';
import {FeedServices} from './services/feed.services';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', redusers)
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedServices]
})
export class FeedModule {

}
