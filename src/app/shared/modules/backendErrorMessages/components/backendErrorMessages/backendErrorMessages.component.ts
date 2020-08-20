import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dr-backend-error-messages',
  templateUrl: 'backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.css']
})
export class BackendErrorMessagesComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('backendErrors')
  backendErrorsProps: BackendErrorsInterface;

  statusText: string;
  errorMessage: string;

  ngOnInit(): void {
    this.statusText = this.backendErrorsProps.status;
    this.errorMessage = this.backendErrorsProps.message;
  }
}
