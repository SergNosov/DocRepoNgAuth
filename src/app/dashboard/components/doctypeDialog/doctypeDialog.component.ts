import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DoctypeInterface} from '../../types/doctype.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-doctype-dialog',
  templateUrl: './doctypeDialog.component.html',
  styleUrls: ['./doctypeDialog.component.css']
})
export class DoctypeDialogComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DoctypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DoctypeInterface) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.data.title
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(form: FormGroup) {
    if (this.form.value.title != this.data.title) {
      this.dialogRef.close({id: this.data.id, title: this.form.value.title});
    } else {
      this.close();
    }
  }
}
