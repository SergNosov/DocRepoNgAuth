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
import {DoctypeDialogComponent} from './components/doctypeDialog/doctypeDialog.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes = [
  {path: 'documents', component: DocumentsComponent},
  {path: 'doctypes', component: DoctypesComponent},
  {path: 'senders', component: SendersComponent}
];

const MATERIAL_COMPONENTS = [
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: [
    DocumentsComponent,
    DoctypesComponent,
    DoctypeDialogComponent,
    SendersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DoctypeEffects]),
    StoreModule.forFeature('doctypes', doctypeReducers),
    ...MATERIAL_COMPONENTS,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [DoctypeDialogComponent],
  providers: [DoctypeServices]
})
export class DashboardModule {
}
