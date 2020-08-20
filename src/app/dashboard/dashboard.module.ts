import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {redusers} from '../auth/store/redusers';
import {DocumentsComponent} from './components/documents/documents.component';
import {DoctypesComponent} from './components/doctypes/doctypes.component';
import {SendersComponent} from './components/senders/senders.component';




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
    StoreModule.forFeature('auth', redusers)
  ],
  providers: []
})
export class DashboardModule {
}
