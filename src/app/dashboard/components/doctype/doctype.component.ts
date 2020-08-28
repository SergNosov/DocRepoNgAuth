import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DoctypeInterface} from '../../types/doctype.interface';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {select, Store} from '@ngrx/store';
import {selectSelectedDoctype} from '../../store/selectors/doctype.selector';
import {GetDoctype} from '../../store/actions/doctypeActionTypes';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doctype',
  templateUrl: './doctype.component.html',
  styleUrls: ['./doctype.component.css']
})
export class DoctypeComponent implements OnInit {
  private doctype$: Observable<DoctypeInterface>;

  constructor(private store: Store<AppStateInterface>,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.doctype$ = this.store.pipe(select(selectSelectedDoctype));
  }

  private fetchData(): void {
    this.store.dispatch(new GetDoctype(this.route.snapshot.params.id));
  }
}
