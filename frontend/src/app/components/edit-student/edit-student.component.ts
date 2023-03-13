import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentData: any;

  constructor(private service: AppServiceService, private router: Router) {}

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    const extras = this.navigation?.extras?.state;
    if (extras) {
      const { id, name, age, hometoen } = extras;
      const student = { id, name, age, hometoen };
      this.service.getOneStudentData(student).subscribe(
        (response) => {
          this.studentData = response[0];
        },
        (error) => {
          console.log('ERROR - ', error);
        }
      );
    } else {
      console.log('ERROR - missing navigation extras');
    }
  }

  editStudent(values) {
    const id = this.navigation?.extras?.state?.id;
    if (id) {
      values.id = id;
      this.service.editStudent(values).subscribe(
        (response) => {
          this.studentData = response[0];
        },
        (error) => {
          console.log('ERROR - ', error);
        }
      );
    } else {
      console.log('ERROR - missing navigation extras');
    }
  }
}
