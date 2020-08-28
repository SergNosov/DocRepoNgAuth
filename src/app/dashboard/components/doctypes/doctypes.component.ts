import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DoctypeInterface} from '../../types/doctype.interface';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {select, Store} from '@ngrx/store';
import {selectDoctypeList} from '../../store/selectors/doctype.selector';
import {GetDoctypes} from '../../store/actions/doctypeActionTypes';

@Component({
  selector: 'app-doctypes',
  templateUrl: './doctypes.component.html',
  styleUrls: ['./doctypes.component.css']
})
export class DoctypesComponent implements OnInit {

  doctypes$: Observable<DoctypeInterface[]> | null;

  // doctypes$ = this.store.pipe(select(selectDoctypeList));

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetDoctypes());
    this.doctypes$ = this.store.pipe(select(selectDoctypeList));
  }

}
