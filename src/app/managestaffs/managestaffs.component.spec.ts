import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestaffsComponent } from './managestaffs.component';

describe('ManagestaffsComponent', () => {
  let component: ManagestaffsComponent;
  let fixture: ComponentFixture<ManagestaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagestaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
