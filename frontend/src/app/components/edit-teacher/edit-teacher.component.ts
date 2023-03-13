import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherData: any;

  constructor(private service: AppServiceService, private router: Router) {}

  navigation = this.router.getCurrentNavigation();

  ngOnInit(): void {
    this.getTeacherData();
  }

  getTeacherData() {
    const extras = this.navigation?.extras?.state;
    if (extras) {
      const { id, name, age } = extras;
      const teacher = { id, name, age };
      this.service.getOneTeacherData(teacher).subscribe(
        (response) => {
          this.teacherData = response[0];
        },
        (error) => {
          console.log('ERROR - ', error);
        }
      );
    } else {
      console.log('ERROR - missing navigation extras');
    }
  }

  editTeacher(values) {
    const id = this.navigation?.extras?.state?.id;
    if (id) {
      values.id = id;
      this.service.editTeacher(values).subscribe(
        (response) => {
          this.teacherData = response[0];
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
