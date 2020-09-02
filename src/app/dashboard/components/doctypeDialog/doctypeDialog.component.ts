import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DoctypeInterface} from '../../types/doctype.interface';

@Component({
  selector: 'app-doctype-dialog',
  templateUrl: './doctypeDialog.component.html',
  styleUrls: ['./doctypeDialog.component.css']
})
export class DoctypeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DoctypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DoctypeInterface) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
