import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {redusers} from './store/redusers';
import {AuthService} from './services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from '../shared/services/persistence.service';
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect';

const routes = [
 // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: RegisterComponent}
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', redusers),
    EffectsModule.forFeature([RegisterEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {
}
