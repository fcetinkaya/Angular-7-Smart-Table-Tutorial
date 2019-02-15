import { Component, OnInit } from "@angular/core";
import { SchoolServiceService } from "./shared/school-service.service";
import { Student } from "./models/student";
import { CustomcolumnComponent } from "./customcolumn/customcolumn.component";
import { LocalDataSource } from 'ng2-smart-table';
declare let alertify: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Smart Table Example";
  constructor(private schoolService: SchoolServiceService) {}

  //SmartTable Settings
  settings = {
    // Delete button Config
    delete: {
      confirmDelete: true,
      deleteButtonContent: "Remove",
      saveButtonContent: "Register",
      cancelButtonContent: "Cancel"
    },
    columns: {
      id: {
        title: "İşlemler",
        type: "custom",
        filter: false,
        renderComponent: CustomcolumnComponent,
        onComponentInitFunction: instance => {
          instance.event.subscribe(x => {
            const actionData = x.rowData as Student;
            alertify.success(
              `${actionData.firstname} ${actionData.lastname} | action-> ${
                x.action
              }`
            );
          });
          instance.event2.subscribe(x => {
            const actionData = x.rowData as Student;
            alertify.warning(
              `${actionData.firstname} ${actionData.lastname} | action-> ${
                x.action
              }`
            );
          });
        }
      },
      firstname: {
        title: "First Name",
        filter: false
        //  valuePrepareFunction: (cell, row) => { return `${row.firstname} ${row.lastname}`; }
      },
      lastname: {
        title: "Last Name"
      },
      class: {
        title: "Class"
      },
      male: {
        title: "Male",
        valuePrepareFunction: (value) => (value == true ? "Man" : "Woman")
      }
    },
    actions: {
      add: true,
      delete: true,
      edit: true
    }
  };

  source: LocalDataSource = new LocalDataSource(this.schoolService.get());
  guncelle() {
    debugger;
    this.schoolService.add({
      id: 6,
      firstname: 'Muiddin',
      lastname: 'İmpatrino',
      male: true,
      class: "7"
    });
    this.schoolService.add({
      id: 7,
      firstname: 'Miss',
      lastname: 'Merple',
      male: false,
      class: "8"
    });
    this.source.load(this.schoolService.get());
  }
  data: Student[];

  // Load Data
  ngOnInit(): void {
    this.schoolService.add({
      id: 1,
      firstname: "Lily",
      lastname: "Lilo",
      class: "4B",
      male: false
    });
    this.schoolService.add({
      id: 1,
      firstname: "Joco",
      lastname: "Coco",
      class: "4B",
      male: true
    });
    this.schoolService.add({
      id: 1,
      firstname: "Steven",
      lastname: "Koula",
      class: "2B",
      male: true
    });
    this.schoolService.add({
      id: 1,
      firstname: "Marry",
      lastname: "Mily",
      class: "4B",
      male: false
    });
    this.data = this.schoolService.get();
  }

  onDeleteConfirm(event) {
    alert(
      "Are you sure this delete, Personel :" +
        event.data.firstname +
        " " +
        event.data.lastname
    );
  }
}
