import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';

import {DocumentsComponent} from './components/documents/documents.component';
import {DoctypesComponent} from './components/doctypes/doctypes.component';
import {SendersComponent} from './components/senders/senders.component';
import {DoctypeServices} from './services/doctype.services';
import {doctypeReducers} from './store/redusers/doctype.redusers';
import {EffectsModule} from '@ngrx/effects';
import {DoctypeEffects} from './store/effects/doctype.effects';

const routes = [
  {path: 'documents', component: DocumentsComponent},
  {path: 'doctypes', component: DoctypesComponent},
  {path: 'senders', component: SendersComponent}
];

@NgModule({
  declarations: [
    DocumentsComponent,
    DoctypesComponent,
    SendersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DoctypeEffects]),
    StoreModule.forFeature('doctypes', doctypeReducers)
  ],
  providers: [DoctypeServices]
})
export class DashboardModule {
}
