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
import {DoctypeComponent} from './components/doctype/doctype.component';
import {DoctypeDialogComponent} from './components/doctypeDialog/doctypeDialog.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DoctypeDialogEffects} from './store/effects/doctypeDialog.effects';
import {doctypeDialogReducers} from './store/redusers/doctypeDialog.reduser';

const routes = [
  {path: 'documents', component: DocumentsComponent},
  {path: 'doctypes', component: DoctypesComponent},
  {path: 'doctype/:id', component: DoctypeComponent},
  {path: 'senders', component: SendersComponent}
];

const MATERIAL_COMPONENTS = [MatDialogModule, MatButtonModule, MatInputModule];

@NgModule({
  declarations: [
    DocumentsComponent,
    DoctypesComponent,
    DoctypeComponent,
    DoctypeDialogComponent,
    SendersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DoctypeEffects, DoctypeDialogEffects]),
    StoreModule.forFeature('doctypes', doctypeReducers),
    // StoreModule.forFeature('doctypes', doctypeDialogReducers),
    ...MATERIAL_COMPONENTS,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [DoctypeDialogComponent],
  providers: [DoctypeServices]
})
export class DashboardModule {
}
