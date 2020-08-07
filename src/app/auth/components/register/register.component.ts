import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {registerAction} from '../../store/actions/register.action';
import {Observable} from 'rxjs';
import {isSubmittingSelector} from '../../store/selectors';
import {AuthService} from '../../services/auth.service';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private store: Store,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.minLength(3), Validators.required]]
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmiting$', this.isSubmitting$);
  }

  onSubmit(): void {
    console.log(this.form.value);
    // вариант 1
    // const request: RegisterRequestInterface = {user: this.form.value};

    const request: RegisterRequestInterface = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    };

    this.store.dispatch(registerAction({request}));
  }
}
