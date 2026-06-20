import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrComponent } from './adminr.component';

describe('AdminrComponent', () => {
  let component: AdminrComponent;
  let fixture: ComponentFixture<AdminrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
