import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DoctypeInterface} from '../../types/doctype.interface';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {select, Store} from '@ngrx/store';
import {selectDoctypeList} from '../../store/selectors/doctype.selector';
import {GetDoctype, GetDoctypes} from '../../store/actions/doctypes.action';
import {Router} from '@angular/router';
import {isLoggedInSelector} from '../../../auth/store/selectors';
import {OpenDoctypeDialog} from '../../store/actions/doctypeDialog.action';

@Component({
  selector: 'app-doctypes',
  templateUrl: './doctypes.component.html',
  styleUrls: ['./doctypes.component.css']
})
export class DoctypesComponent implements OnInit {

  private doctypes$: Observable<DoctypeInterface[]> | null;
  private isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>,
              private router: Router) {
  }

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  private initializeValues(): void {
    this.doctypes$ = this.store.pipe(select(selectDoctypeList));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  private fetchData(): void {
    this.store.dispatch(new GetDoctypes());
  }

  navigateToDoctype(id: number): void {
    this.router.navigate(['doctype', id]);
  }

  openDialog(doctype: DoctypeInterface): void {
    console.log('--- doctype:', doctype);
    this.store.dispatch(new GetDoctype(doctype.id));
    this.store.dispatch(new OpenDoctypeDialog(doctype));
  }
}
