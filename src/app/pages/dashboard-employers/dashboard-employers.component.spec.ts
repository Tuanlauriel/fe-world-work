import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployersComponent } from './dashboard-employers.component';

describe('DashboardEmployersComponent', () => {
  let component: DashboardEmployersComponent;
  let fixture: ComponentFixture<DashboardEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEmployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
