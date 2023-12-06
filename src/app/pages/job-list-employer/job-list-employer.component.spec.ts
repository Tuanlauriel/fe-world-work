import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListEmployerComponent } from './job-list-employer.component';

describe('JobListEmployerComponent', () => {
  let component: JobListEmployerComponent;
  let fixture: ComponentFixture<JobListEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
