import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddNewStudentComponent } from './add-new-student.component';
import { AppServiceService } from '../../app-service.service';

describe('AddNewStudentComponent', () => {
  let component: AddNewStudentComponent;
  let fixture: ComponentFixture<AddNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStudentComponent ],
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
    fixture = TestBed.createComponent(AddNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
