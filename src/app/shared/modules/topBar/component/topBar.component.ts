import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {currentUserSelector, isLoggedInSelector} from '../../../../auth/store/selectors';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {PersistenceService} from '../../../services/persistence.service';
import {Router} from '@angular/router';
import {getCurrentUserAction} from 'src/app/auth/store/actions/getCurrentUser.action';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dr-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store,
              private router: Router,
              private persistenceService: PersistenceService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  exit() {
    this.persistenceService.clear();
    this.store.dispatch(getCurrentUserAction());
    this.router.navigate(['/']);
  }
}
