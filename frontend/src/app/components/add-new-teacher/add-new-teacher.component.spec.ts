import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddNewTeacherComponent } from './add-new-teacher.component';
import { AppServiceService } from '../../app-service.service';

describe('AddNewTeacherComponent', () => {
  let component: AddNewTeacherComponent;
  let fixture: ComponentFixture<AddNewTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTeacherComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule // import the HttpClientTestingModule
      ],
      providers: [ AppServiceService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
