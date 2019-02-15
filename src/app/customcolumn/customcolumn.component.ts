import { Component, EventEmitter, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { Student } from "src/app/models/student";
declare let alertify: any;

@Component({
  selector: "app-customcolumn",
  template: '<button (click)="ogrenciBilgileri()">Öğrenciyi Göster</button>'
})
export class CustomcolumnComponent implements ViewCell {
  value: string | number;
  rowData: Student;

  constructor() {}
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() event2: EventEmitter<any> = new EventEmitter<any>();
  ogrenciBilgileri() {
    this.event.emit({ rowData: this.rowData, action: "1. Olay" });
    this.event2.emit({ rowData: this.rowData, action: "2. Olay" });
  //  alertify.success(`${this.rowData.firstname} ${this.rowData.lastname}`);
  }
}
