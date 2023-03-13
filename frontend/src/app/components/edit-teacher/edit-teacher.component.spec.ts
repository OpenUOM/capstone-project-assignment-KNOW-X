import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditTeacherComponent } from './edit-teacher.component';
import { AppServiceService } from '../../app-service.service';

describe('EditTeacherComponent', () => {
  let component: EditTeacherComponent;
  let fixture: ComponentFixture<EditTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherComponent ],
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
    fixture = TestBed.createComponent(EditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
