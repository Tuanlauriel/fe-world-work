import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersLayoutComponent } from './employers-layout.component';

describe('EmployersLayoutComponent', () => {
  let component: EmployersLayoutComponent;
  let fixture: ComponentFixture<EmployersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployersLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
