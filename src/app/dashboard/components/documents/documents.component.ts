import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedInSelector} from '../../../auth/store/selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, DoCheck, AfterContentInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  ngDoCheck(): void {
    // console.log('--- ngDoCheck()', this.isLoggedIn$);
    // if (this.isLoggedIn$) {
    //   console.log('--- ngDoCheck() true');
    //   // this.router.navigate(['/']);
    // }
  }

  ngAfterContentInit(): void {
    if (this.isLoggedIn$) {
      console.log('--- ngAfterContentInit() true');
      // this.router.navigate(['/']);
    }
  }
}
