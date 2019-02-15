import { Injectable } from "@angular/core";
import { Student, Students } from "../models/student";

@Injectable({
  providedIn: "root"
})
export class SchoolServiceService {
  constructor() {}

  add(student: Student) {
    Students.push(student);
  }

  remove(student: Student) {
    let index = Students.indexOf(student);
    Students.slice(index, 1);
  }

  get(): Student[] {
    return Students;
  }
}
