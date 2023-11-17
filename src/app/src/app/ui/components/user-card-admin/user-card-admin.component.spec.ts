import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardAdminComponent } from './user-card-admin.component';

describe('UserCardAdminComponent', () => {
  let component: UserCardAdminComponent;
  let fixture: ComponentFixture<UserCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
