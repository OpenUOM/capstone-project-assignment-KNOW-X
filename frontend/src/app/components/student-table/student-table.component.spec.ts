import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentTableComponent } from './student-table.component';
import { AppServiceService } from '../../app-service.service';

describe('StudentTableComponent', () => {
  let component: StudentTableComponent;
  let fixture: ComponentFixture<StudentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableComponent ],
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
    fixture = TestBed.createComponent(StudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
