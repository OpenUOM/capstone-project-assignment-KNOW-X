import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacherData: any;
  teacherId: string;

  constructor(
    private service: AppServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teacherId = params['id'];
      this.getTeacherData();
    });
  }

  getTeacherData() {
    this.service.getOneTeacherData({ id: this.teacherId }).subscribe(
      (response) => {
        this.teacherData = response[0];
      },
      (error) => {
        console.log('ERROR - ', error)
      }
    )
  }

  editTeacher(values) {
    values.id = this.teacherId;
    this.service.editTeacher(values).subscribe(
      (response) => {
        this.teacherData = response[0];
      },
      (error) => {
        console.log('ERROR - ', error)
      }
    )
  }

}
